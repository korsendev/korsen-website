import json, wave, subprocess, glob
import numpy as np
exec(open('sfx_base.py', encoding='utf-8').read())

K = 1.875 / 2
D = 16.05                      # drop de la canción (s)
T0 = D - 4 * K * 1.0 * 1.0     # intro = 2 compases = 4 s de timeline = 3.75 s reales
DUR = 52 * K                   # 48.75 s
FF = glob.glob(r'C:\Users\ramge\AppData\Local\Temp\claude\*\*\scratchpad\ff\imageio_ffmpeg\binaries\*.exe')[0]
subprocess.run([FF, '-y', '-loglevel', 'error', '-ss', f'{T0:.3f}', '-t', f'{DUR + .5:.3f}', '-i', '../public/Make Your Move.mp3', '-ac', '2', '-ar', '44100', 'seg.wav'], check=True)
w = wave.open('seg.wav'); tr = np.frombuffer(w.readframes(w.getnframes()), '<i2').reshape(-1, 2) / 32768.
M = len(tr)

# SFX (tiempos de la página en segundos de timeline -> reales)
vol = dict(wipe=.55, whoosh=.2, pop=.4, tick=.25, click=.5, chime=.35)
for e in json.load(open('events.json')):
    t, ty, v, p = e['t'] * K, e['type'], e['v'], e['p']
    if ty not in vol: continue
    g = vol[ty] * v
    if ty == 'wipe': add(L, R, whoosh(.8, 1), t, g, 0, .15)
    elif ty == 'whoosh': add(L, R, whoosh(.6, .7), t, g, np.sin(p) * .4, .1)
    elif ty == 'pop': add(L, R, pop(p), t, g, ((p % 3) - 1) * .4, .25)
    elif ty == 'tick': add(L, R, tick(p), t, g, ((p % 3) - 1) * .5, .1)
    elif ty == 'click': add(L, R, click(), t, g, 0)
    elif ty == 'chime': add(L, R, chime(), t, g, 0, .4)
add(L, R, impact(), D - T0, .28, 0, .2)   # refuerzo sub en el drop

def reverb(x, rt=1.6, seed=1):
    r = np.random.default_rng(seed); n = int(SR * rt); t = np.arange(n) / SR
    ir = fftfilt(r.standard_normal(n) * np.exp(-t * 3.6 / rt * 1.6) * np.minimum(1, t / .02), hi=6500, lo=200)
    m = len(x) + n; return np.fft.irfft(np.fft.rfft(x, m) * np.fft.rfft(ir, m), m)[:len(x)] * .045
sl = L + reverb(SEND_L, 1.6, 1); sr_ = R + reverb(SEND_R, 1.6, 2)
n = min(M, len(sl))
mix = np.stack([tr[:n, 0] * .92 + sl[:n], tr[:n, 1] * .92 + sr_[:n]], 1)
t = np.arange(n) / SR
g = np.minimum(1, t / .12) * np.clip((DUR - t) / 2.6, 0, 1)
mix *= g[:, None]
mix = np.tanh(mix * 1.1) * .93
out = (mix[:int(SR * DUR)] * 32767).astype('<i2')
with wave.open('tour.wav', 'wb') as f:
    f.setnchannels(2); f.setsampwidth(2); f.setframerate(SR); f.writeframes(out.tobytes())
print('ok', len(out) / SR, 'T0', T0, 'peak', float(abs(mix).max()), 'rms', float(np.sqrt((mix ** 2).mean())))
