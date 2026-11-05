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

