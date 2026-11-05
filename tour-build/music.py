"""Música dinámica 120 BPM (Am-F-C-G) + SFX sincronizados con events.json -> tour.wav"""
import json, wave
import numpy as np

SR = 44100
BPM = 120
BEAT = 60 / BPM
BAR = BEAT * 4
TOTAL = 50.0
N = int(SR * (TOTAL + 1.5))
rng = np.random.default_rng(7)

def tt(d): return np.arange(int(SR * d)) / SR
def midi(n): return 440 * 2 ** ((n - 69) / 12)

def fftfilt(x, lo=None, hi=None):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    m = np.ones_like(f)
    if hi is not None: m *= 1 / (1 + (f / hi) ** 4)
    if lo is not None: m *= 1 - 1 / (1 + (f / lo) ** 4)
    return np.fft.irfft(X * m, len(x))

def noise(d): return rng.standard_normal(int(SR * d))

L = np.zeros(N); R = np.zeros(N)       # bus seco
SEND_L = np.zeros(N); SEND_R = np.zeros(N)  # envío a reverb
KICK = np.zeros(N)                     # para sidechain
BASSL = np.zeros(N); BASSR = np.zeros(N)    # bajo (sidechain)
MUSL = np.zeros(N); MUSR = np.zeros(N)      # pads/arp/lead (sidechain)

def put(buf, x, t, g=1.0):
    i = int(t * SR)
    if i < 0 or i >= N: return
    e = min(N, i + len(x)); buf[i:e] += x[:e - i] * g

def pan(x, p):  # p -1..1
    a = (p + 1) * np.pi / 4
    return x * np.cos(a), x * np.sin(a)

def add(bufL, bufR, x, t, g=1.0, p=0.0, send=0.0):
    l, r = pan(x, p); put(bufL, l, t, g); put(bufR, r, t, g)
    if send: put(SEND_L, l, t, g * send); put(SEND_R, r, t, g * send)

# ───────────── instrumentos ─────────────
def kick(vel=1.0):
    t = tt(.42)
    f = 46 + 130 * np.exp(-t * 28)
    ph = 2 * np.pi * np.cumsum(f) / SR
    x = np.sin(ph) * np.exp(-t * 7.5) + .35 * np.sin(ph * 2) * np.exp(-t * 20)
    x += .5 * noise(.42) * np.exp(-t * 400)
    return np.tanh(x * 1.6) * vel

def clap(vel=1.0):
    d = .32; t = tt(d); n = fftfilt(noise(d), lo=900, hi=7500)
    env = sum(np.exp(-np.clip(t - o, 0, None) * (90 if o < .03 else 22)) * (t >= o) for o in (0, .011, .023, .036))
    return n * env * .55 * vel

def hat(open_=False, vel=1.0):
    d = .28 if open_ else .06; t = tt(d)
    return fftfilt(noise(d), lo=7000) * np.exp(-t * (14 if open_ else 70)) * .28 * vel

def saw(f, d, nh=40):
    t = tt(d); x = np.zeros(len(t))
    for k in range(1, min(nh, int(18000 / f)) + 1): x += np.sin(2 * np.pi * k * f * t) / k
    return x * .55

def bass(f, d, vel=1.0):
    t = tt(d)
    x = np.sin(2 * np.pi * f * t) + .45 * saw(f, d, 8) * np.exp(-t * 4)
    env = np.minimum(1, t / .006) * np.exp(-np.clip(t - (d - .05), 0, None) * 40) * np.exp(-t * 1.2)
    return np.tanh(x * env * 1.7) * .62 * vel

def pluck(f, d=.34, vel=1.0):
    t = tt(d); x = saw(f, d, 24) + .5 * saw(f * 1.004, d, 24)
    cut = 900 + 6500 * np.exp(-t * 14)
    # filtro dinámico aproximado: mezcla de dos pasabajos
    a = fftfilt(x, hi=1400); b = fftfilt(x, hi=7000)
    w = np.exp(-t * 16); x = a * (1 - w) + b * w
    return x * np.exp(-t * 9) * np.minimum(1, t / .003) * .5 * vel

def pad(freqs, d, vel=1.0):
    t = tt(d); x = np.zeros(len(t))
    for f in freqs:
        for dt in (-.012, 0, .012): x += saw(f * (1 + dt), d, 14) * (.33)
    x = fftfilt(x, hi=2400)
    env = np.minimum(1, t / .5) * np.minimum(1, np.clip(d - t, 0, None) / .6)
    return x * env * .30 * vel

def lead(f, d, vel=1.0):
    t = tt(d); vib = 1 + .004 * np.sin(2 * np.pi * 5.5 * t) * np.minimum(1, t / .25)
    ph = 2 * np.pi * np.cumsum(f * vib) / SR
    x = np.sin(ph) + .5 * np.sin(2 * ph) + .3 * np.sin(3 * ph) + .2 * np.sin(5 * ph)
    env = np.minimum(1, t / .008) * np.exp(-np.clip(t - (d - .08), 0, None) * 25) * (.6 + .4 * np.exp(-t * 3))
    return x * env * .3 * vel

def riser(d, vel=1.0):
    t = tt(d); u = t / d
    n = noise(d); out = np.zeros(len(t)); seg = 12
    # barrido de pasa-altos por tramos
    for k in range(seg):
        a, b = int(len(t) * k / seg), int(len(t) * (k + 1) / seg)
        out[a:b] = fftfilt(n[a:b], lo=300 + 7000 * (k / seg) ** 2)
    sw = np.sin(2 * np.pi * np.cumsum(180 + 2400 * u ** 2.2) / SR) * .25
    return (out * .35 + sw) * (u ** 1.8) * vel

def impact(vel=1.0):
    d = 2.2; t = tt(d)
    sub = np.sin(2 * np.pi * np.cumsum(60 * np.exp(-t * 2.2) + 32) / SR) * np.exp(-t * 2.4)
    crash = fftfilt(noise(d), lo=2500) * np.exp(-t * 2.8) * .45
    return np.tanh((sub * 1.2 + crash) * vel)

def whoosh(d=.7, vel=1.0):
    t = tt(d); u = t / d; n = noise(d); out = np.zeros(len(t)); seg = 10
    for k in range(seg):
        a, b = int(len(t) * k / seg), int(len(t) * (k + 1) / seg)
        c = 500 * 2 ** (5 * np.sin(np.pi * (k + .5) / seg))
        out[a:b] = fftfilt(n[a:b], lo=c * .5, hi=c * 2.4)
    return out * np.sin(np.pi * u) ** 1.6 * .55 * vel

def pop(p=0, vel=1.0):
    d = .22; t = tt(d); f = midi(76 + [0, 4, 7, 12, 16][p % 5])
    x = np.sin(2 * np.pi * np.cumsum(f * (1 + 1.2 * np.exp(-t * 60))) / SR) * np.exp(-t * 14)
    x += .3 * np.sin(2 * np.pi * f * 2 * t) * np.exp(-t * 22)
    return x * .5 * vel

def tick(p=0, vel=1.0):
    d = .07; t = tt(d); f = midi(88 + (p % 4) * 2)
    return (np.sin(2 * np.pi * f * t) * .5 + fftfilt(noise(d), lo=4000) * .25) * np.exp(-t * 60) * vel

def click(vel=1.0):
    d = .1; t = tt(d)
    return (fftfilt(noise(d), lo=1500, hi=6000) * np.exp(-t * 90) * .8 + np.sin(2 * np.pi * 220 * t) * np.exp(-t * 50) * .5) * vel

def chime(vel=1.0):
    d = 1.6; t = tt(d); x = np.zeros(len(t))
    for i, n in enumerate((81, 84, 88, 93)): x += np.sin(2 * np.pi * midi(n) * t) * np.exp(-t * (3 + i)) * np.minimum(1, t / .004)
    return x * .22 * vel

# ───────────── arreglo ─────────────
CH = [  # Am F C G  (raíz bajo, acorde pad, arpegio)
    dict(root=33, pad=[57, 60, 64, 69], arp=[69, 72, 76, 81, 76, 72]),
    dict(root=29, pad=[53, 57, 60, 65], arp=[65, 69, 72, 77, 72, 69]),
    dict(root=36, pad=[55, 60, 64, 67], arp=[67, 72, 76, 79, 76, 72]),
    dict(root=31, pad=[55, 59, 62, 67], arp=[67, 71, 74, 79, 74, 71]),
]
LEAD = [  # motivo (offset en corcheas, nota, duración corcheas) por compás
    [(0, 81, 3), (3, 79, 1), (4, 76, 2), (6, 79, 2)],
    [(0, 77, 3), (3, 76, 1), (4, 72, 2), (6, 76, 2)],
    [(0, 79, 3), (3, 76, 1), (4, 72, 2), (6, 76, 2)],
    [(0, 74, 2), (2, 79, 2), (4, 83, 3), (7, 81, 1)],
]

def sect(bar):
    """capas activas por compás"""
    s = dict(kick=0, hat=0, bass=0, arp=0, pad=0, clap=0, lead=0)
    if bar < 2: s.update(pad=1)
    elif bar < 6: s.update(kick=1, hat=1, bass=1, pad=1, arp=int(bar >= 4))
    elif bar < 10: s.update(kick=1, hat=1, bass=1, pad=1, arp=1, clap=1)
    elif bar < 17: s.update(kick=1, hat=1, bass=1, pad=1, arp=1, clap=1, lead=1)
    elif bar < 18: s.update(pad=1, arp=1)                                  # breakdown
    elif bar < 22: s.update(kick=1, hat=1, bass=1, pad=1, arp=1, clap=1, lead=1)
    elif bar < 23: s.update(pad=1, arp=1, hat=1, kick=1)
    elif bar < 24: s.update(pad=1, arp=1, kick=1, hat=1)
    else: s.update(pad=1)
    return s

nbars = int(TOTAL / BAR)
for bar in range(nbars + 1):
    t0 = bar * BAR; c = CH[bar % 4]; s = sect(bar)
    if s['pad']:
        x = pad([midi(n) for n in c['pad']], BAR + .25)
        add(MUSL, MUSR, x, t0, .7, 0, .35)
    for b in range(4):
        tb = t0 + b * BEAT
        if s['kick'] and not (bar == 5 and b == 3):
            put(L, kick(), tb, .95); put(R, kick(), tb, .95); put(KICK, np.ones(1), tb)
        if s['clap'] and b in (1, 3):
            add(L, R, clap(), tb, .8, 0, .25)
        if s['hat']:
            add(L, R, hat(True), tb + BEAT / 2, .8, .25, .1)
            add(L, R, hat(False, .6), tb + BEAT / 4, .6, -.2); add(L, R, hat(False, .6), tb + 3 * BEAT / 4, .6, .2)
    if s['bass']:
        pat = [0, 2, 3, 5, 6, 7]  # corcheas activas
        for k in range(8):
            if k in pat:
                f = midi(c['root'] + (12 if k in (3, 7) else 0))
                x = bass(f, BEAT / 2 * .9, 1.0)
                put(BASSL, x, t0 + k * BEAT / 2, .8); put(BASSR, x, t0 + k * BEAT / 2, .8)
    if s['arp']:
        for k in range(16):
            n = c['arp'][k % len(c['arp'])]
            x = pluck(midi(n + (12 if (bar >= 10 and k % 8 == 7) else 0)), vel=.7 if k % 4 else 1.0)
            add(MUSL, MUSR, x, t0 + k * BEAT / 4, .55, np.sin(k * 1.1) * .5, .3)
            add(MUSL, MUSR, x, t0 + k * BEAT / 4 + 3 * BEAT / 4, .22, -np.sin(k * 1.1) * .6, .3)  # eco
    if s['lead']:
        for off, n, dur in LEAD[bar % 4]:
            x = lead(midi(n), dur * BEAT / 2 * .95)
            add(MUSL, MUSR, x, t0 + off * BEAT / 2, .7, 0, .4)

# risers / impactos / redobles estructurales
def roll(t0, d, n=16):
    for i in range(n):
        u = i / n; tt0 = t0 + d * (i / n)
        add(L, R, clap(.5 + .5 * u), tt0, .6 * (.5 + u), 0, .2)
for rs, d in ((0.1, 3.9), (10.0, 2.0), (30.0, 2.0), (34.0, 2.0), (40.0, 3.9)):
    add(L, R, riser(d), rs, .7, 0, .2)
roll(10.0, 2.0, 8); roll(34.0, 2.0, 16); roll(40.4, 3.6, 24)
for it, g in ((4.0, .9), (12.0, .7), (20.0, .7), (28.0, .7), (36.0, 1.0), (44.0, 1.1)):
    x = impact(); add(L, R, x, it, .75 * g, 0, .35)
    put(KICK, np.ones(1), it)

# SFX desde eventos de la página
for e in json.load(open('events.json')):
    t, ty, v, p = e['t'], e['type'], e['v'], e['p']
    if ty == 'wipe': add(L, R, whoosh(.8, 1), t, .9 * v, 0, .2)
    elif ty == 'whoosh': add(L, R, whoosh(.6, .7), t, .35 * v, np.sin(p) * .4, .15)
    elif ty == 'pop': add(L, R, pop(p), t, .75 * v, ((p % 3) - 1) * .4, .35)
    elif ty == 'tick': add(L, R, tick(p), t, .5 * v, ((p % 3) - 1) * .5, .2)
    elif ty == 'click': add(L, R, click(), t, .8 * v, 0)
    elif ty == 'chime': add(L, R, chime(), t, .8 * v, 0, .5)
    elif ty == 'impact': add(L, R, impact(), t, .6 * v, 0, .3)
# acorde final
fin = np.zeros(int(SR * 5))
for n in (57, 60, 64, 69, 72, 76): fin += pad([midi(n)], 5)
add(MUSL, MUSR, fin, 44.0, .9, 0, .5)
add(L, R, chime(1.3), 44.1, .8, 0, .6)

# ───────────── mezcla ─────────────
# sidechain: envolvente desde pulsos de kick
k = np.flatnonzero(KICK)
duck = np.ones(N)
tail = int(.26 * SR); curve = 1 - .72 * np.exp(-np.arange(tail) / (.075 * SR))
for i in k: e = min(N, i + tail); duck[i:e] = np.minimum(duck[i:e], curve[:e - i])
L += BASSL * duck * 1.0 + MUSL * duck
R += BASSR * duck * 1.0 + MUSR * duck

# reverb (IR sintética estéreo) sobre los envíos
def reverb(x, rt=1.9, seed=1):
    r = np.random.default_rng(seed); n = int(SR * rt); t = np.arange(n) / SR
    ir = r.standard_normal(n) * np.exp(-t * 3.6 / rt * 1.6) * np.minimum(1, t / .02)
    ir = fftfilt(ir, hi=6500, lo=200)
    m = len(x) + n; X = np.fft.rfft(x, m) * np.fft.rfft(ir, m)
    return np.fft.irfft(X, m)[:len(x)] * .045
L += reverb(SEND_L, 1.9, 1); R += reverb(SEND_R, 1.9, 2)

# fade in/out maestro, limitador suave y normalización
t = np.arange(N) / SR
g = np.minimum(1, t / .25) * np.clip((TOTAL + .5 - t) / 2.2, 0, 1)
g[t > TOTAL + .5] = 0
L *= g; R *= g
pk = max(np.abs(L).max(), np.abs(R).max()); L /= pk; R /= pk
L = np.tanh(L * 1.9) / np.tanh(1.9); R = np.tanh(R * 1.9) / np.tanh(1.9)
L *= .89; R *= .89
n = int(SR * TOTAL)
out = (np.stack([L[:n], R[:n]], 1) * 32767).astype('<i2')
with wave.open('tour.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(out.tobytes())
print('ok', n / SR, 'rms', float(np.sqrt(np.mean((out / 32767.) ** 2))))
