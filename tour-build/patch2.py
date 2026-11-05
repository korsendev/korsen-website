t=open('tour.html',encoding='utf-8').read()
def R(a,b):
    global t
    assert a in t,a[:60]
    t=t.replace(a,b,1)
R("      ti++;const L=s.L,dur=s.e-s.s;","      ti=TOURS.indexOf(s);const L=s.L,dur=s.e-s.s;")
R("const WIPES=","const TOURS=SCENES.filter(s=>s.type==='tour');\nconst WIPES=")
R("""${'Recorre nuestra'.split(' ').map(w=>`<span class="w"><span>${w}</span></span> `).join('')}<br>${`<span class="w"><span class="g">web</span></span> <span class="w"><span>en 45 s</span></span>`}""",
  """<span class="w"><span>Recorre</span></span><br><span class="w"><span class="g">nuestra</span></span> <span class="w"><span class="g">web</span></span>""")
open('tour.html','w',encoding='utf-8').write(t)
