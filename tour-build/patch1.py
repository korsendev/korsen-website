t = open('tour.html', encoding='utf-8').read()

def R(a, b):
    global t
    assert t.count(a) >= 1, a[:70]
    t = t.replace(a, b, 1)

# ── CSS ──
R("#grid{position:absolute;inset:-200px;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:90px 90px;",
  "#grid{position:absolute;inset:-200px;background-image:linear-gradient(to right,rgba(198,253,14,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(198,253,14,.07) 1px,transparent 1px);background-size:32px 32px;")
R(".mock{position:absolute;width:1440px;height:944px;border-radius:22px;background:#0b0b0b;overflow:hidden;\n  box-shadow:0 0 0 2px rgba(255,255,255,.12),0 90px 180px rgba(0,0,0,.75),0 0 260px rgba(198,253,14,.14);will-change:transform}",
  ".mw{position:absolute;width:1440px;height:944px;will-change:transform}\n.mock{position:relative;width:1440px;height:944px;border-radius:24px;background:#0a0a0a;overflow:hidden;\n  box-shadow:0 0 0 1.5px rgba(198,253,14,.45),0 90px 180px rgba(0,0,0,.75),0 0 220px rgba(198,253,14,.12)}\n.cn{position:absolute;width:44px;height:44px;border:6px solid var(--g);pointer-events:none}\n.cn.tl{left:-26px;top:-26px;border-right:none;border-bottom:none}.cn.tr{right:-26px;top:-26px;border-left:none;border-bottom:none}\n.cn.bl{left:-26px;bottom:-26px;border-right:none;border-top:none}.cn.br{right:-26px;bottom:-26px;border-left:none;border-top:none}")
R("background:#141414;border-bottom:1px solid #222}", "background:#101010;border-bottom:1px solid var(--bd)}")
R("background:#0a0a0a;border:1px solid #242424;font:500 14px 'JetBrains Mono';color:#8b8b8b", "background:#050505;border:1px solid var(--bd);font:500 14px 'JetBrains Mono';color:var(--mut)")
R(".copy{position:absolute;width:560px}", ".copy{position:absolute;width:600px}")
R(".kick{font:600 21px 'JetBrains Mono';letter-spacing:.2em;color:var(--g);display:flex;align-items:center;gap:14px;margin-bottom:28px;will-change:transform}",
  ".kick{font:600 20px 'JetBrains Mono';letter-spacing:.05em;text-transform:uppercase;color:var(--g);display:flex;align-items:center;gap:14px;margin-bottom:26px;will-change:transform}")
R("h2{font:800 74px/1.04 'Space Grotesk';letter-spacing:-.035em}", "h2{font:700 70px/1.04 'Space Grotesk';letter-spacing:-.02em;text-transform:uppercase}")
R("font:500 26px/1.45 'Space Grotesk';color:#a9a9a9;width:500px", "font:500 27px/1.45 'Space Grotesk';color:var(--t2);width:520px")
R(".chip{position:absolute;display:flex;align-items:center;gap:12px;padding:15px 24px 15px 16px;border-radius:999px;background:rgba(20,20,20,.78);backdrop-filter:blur(14px);border:1.5px solid rgba(198,253,14,.55);font:700 25px 'Space Grotesk';white-space:nowrap;box-shadow:0 20px 60px rgba(0,0,0,.6),0 0 40px rgba(198,253,14,.2);z-index:20}",
  ".chip{position:absolute;display:flex;align-items:center;gap:12px;padding:13px 24px 13px 14px;border-radius:999px;background:linear-gradient(135deg,rgba(20,20,20,.9),rgba(10,10,10,.92));backdrop-filter:blur(14px);border:1px solid rgba(198,253,14,.45);font:600 21px 'JetBrains Mono';letter-spacing:.05em;text-transform:uppercase;white-space:nowrap;box-shadow:0 20px 60px rgba(0,0,0,.6),0 0 36px rgba(198,253,14,.18);z-index:20}")
R(".chip em{display:grid;place-items:center;width:34px;height:34px", ".chip em{display:grid;place-items:center;width:32px;height:32px")
R("#brand{position:absolute;left:64px;bottom:44px;z-index:70;display:flex;align-items:center;gap:14px;font:700 24px 'Space Grotesk';letter-spacing:-.01em;opacity:.9}\n#brand img{height:34px}\n#prog{position:absolute;right:64px;bottom:56px;z-index:70;display:flex;gap:10px}\n#prog i{width:34px;height:5px;border-radius:3px;background:rgba(255,255,255,.18);display:block;overflow:hidden}\n#prog i b{display:block;height:100%;width:0;background:var(--g)}",
  "#brand{position:absolute;left:64px;bottom:40px;z-index:70}\n#brand img{height:46px;display:block}\n#tnav{position:absolute;left:50%;top:34px;transform:translateX(-50%);z-index:70;display:flex;gap:4px;padding:6px;border-radius:999px;background:rgba(10,10,10,.85);border:1px solid var(--bd);backdrop-filter:blur(12px)}\n#tnav span{position:relative;padding:11px 22px;border-radius:999px;font:600 15px 'JetBrains Mono';letter-spacing:.05em;text-transform:uppercase;color:var(--mut);overflow:hidden}\n#tnav span b{position:absolute;left:0;top:0;bottom:0;width:0;background:var(--g);opacity:0}\n#prog{display:none}")
R(".flt{position:absolute;width:1440px;height:900px;border-radius:20px;overflow:hidden;box-shadow:0 0 0 2px rgba(255,255,255,.1),0 60px 140px rgba(0,0,0,.7)}",
  ".flt{position:absolute;width:1440px;height:900px;border-radius:24px;overflow:hidden;box-shadow:0 0 0 1.5px rgba(198,253,14,.4),0 60px 140px rgba(0,0,0,.7)}")
R(".btn{position:absolute;display:flex;align-items:center;gap:18px;padding:30px 54px;border-radius:999px;background:var(--g);color:#000;font:800 38px 'Space Grotesk';letter-spacing:-.02em;box-shadow:0 0 90px rgba(198,253,14,.5)}",
  ".btn{position:absolute;display:flex;align-items:center;gap:18px;padding:28px 50px;border-radius:12px;background:linear-gradient(180deg,var(--gl) 0%,var(--g) 100%);color:#050505;font:700 38px 'Space Grotesk';letter-spacing:-.02em;box-shadow:0 6px 80px rgba(198,253,14,.38)}")
R("background:rgba(198,253,14,.17)", "background:rgba(198,253,14,.10)")
R("background:rgba(40,120,60,.22)", "background:rgba(198,253,14,.05)")
R("#wg{width:2300px;background:linear-gradient(90deg,#c6fd0e 0%,#c6fd0e 96%,#e9ffa0 100%)}", "#wg{width:2300px;background:linear-gradient(180deg,#d4ff42 0%,#c6fd0e 100%)}")

# ── HTML ──
R('<div id="brand"><img src="logo-mark.png" alt=""><span>korsen<span style="color:var(--g)">.dev</span></span></div>\n  <div id="prog"></div>',
  '<div id="brand"><img src="logo-wordmark.png" alt=""></div>\n  <div id="tnav"></div>\n  <div id="prog"></div>')

# ── JS ──
R("R:{mx:1300,my:560,s:.76,ry:-13,rx:3,cx:100,cy:330}", "R:{mx:1335,my:575,s:.82,ry:-12,rx:3,cx:90,cy:340}")
R("L:{mx:620,my:560,s:.76,ry:13,rx:3,cx:1270,cy:330}", "L:{mx:585,my:575,s:.82,ry:12,rx:3,cx:1250,cy:340}")
R("C:{mx:960,my:705,s:.73,ry:0,rx:8,cx:0,cy:90,center:true}", "C:{mx:960,my:722,s:.70,ry:0,rx:7,cx:0,cy:140,center:true}")
R('<div class="persp"><div class="mock"><div class="bar">', '<div class="persp"><div class="mw"><div class="mock"><div class="bar">')
R('<div class="rip"></div><div class="cur">${CUR}</div></div></div></div>',
  '<div class="rip"></div><div class="cur">${CUR}</div></div></div><i class="cn tl"></i><i class="cn tr"></i><i class="cn bl"></i><i class="cn br"></i></div></div>')
R("s.mock=el.querySelector('.mock');", "s.mock=el.querySelector('.mw');")
R("""<h2 ${L.center?'style="font-size:84px"':''}>""", """<h2 ${L.center?'style="font-size:78px"':''}>""")
for a, b in [("'01 · INICIO'", "'// 01_INICIO'"), ("'02 · SERVICIOS'", "'// 02_SERVICIOS'"), ("'03 · PROYECTOS'", "'// 03_PROYECTOS'"),
             ("'04 · EVALUADOR'", "'// 04_COTIZAR'"), ("'05 · NOSOTROS'", "'// 05_NOSOTROS'"), ("'06 · BLOG'", "'// 06_BLOG'")]:
    R(a, b)
R("scroll:[[0,0],[1.6,0],[3.2,900],[4.6,900],[6,1800],[7.6,2700]]", "scroll:[[0,0],[1.6,0],[3.0,950],[4.2,950],[7.8,4700]]")
R("chips:[[2.0,'Carga ultra rápida',.50,.80],[3.5,'Diseño responsive',.78,.20],[5.0,'CTA que convierte',.43,.52]]",
  "chips:[[2.0,'Carga ultra rápida',.50,.84],[3.5,'Diseño responsive',.80,.18],[5.0,'CTA que convierte',.43,.56]]")

# intro
R('top:250px;text-align:center"><img id="il" src="logo-wordmark.png" style="height:150px;filter:drop-shadow(0 0 40px rgba(198,253,14,.45))">',
  'top:215px;text-align:center"><img id="il" src="logo-wordmark.png" style="height:170px;filter:drop-shadow(0 0 40px rgba(198,253,14,.35))">')
R("""${'Software que'.split(' ').map(w=>`<span class="w"><span>${w}</span></span> `).join('')}<br>${`<span class="w"><span class="g">funciona.</span></span>`}""",
  """${'Recorre nuestra'.split(' ').map(w=>`<span class="w"><span>${w}</span></span> `).join('')}<br>${`<span class="w"><span class="g">web</span></span> <span class="w"><span>en 45 s</span></span>`}""")
R("top:850px;text-align:center;font:600 30px 'JetBrains Mono';letter-spacing:.24em;color:#9a9a9a\">RECORRIDO POR KORSEN.DEV</div>",
  "top:860px;text-align:center;font:600 26px 'JetBrains Mono';letter-spacing:.05em;color:var(--mut)\">// TOUR_GUIADO · 6 SECCIONES</div>")
R('<h2 style="font-size:132px;line-height:1.02">', '<h2 style="font-size:116px;line-height:1.04">')

# cta
R('<div class="kick" style="justify-content:center">TU SIGUIENTE PASO</div>\n <h2 style="font-size:124px;line-height:1.02;margin-top:6px">',
  '<div class="kick" style="justify-content:center">// SIGUIENTE_PASO</div>\n <h2 style="font-size:112px;line-height:1.04;margin-top:6px">')
R('style="left:50%;top:700px;margin-left:-330px">', 'style="left:50%;top:690px;margin-left:-345px">')
R("""top:880px;text-align:center;font:700 44px 'Space Grotesk';letter-spacing:-.02em">korsen<span class="g">.dev</span></div>""",
  """top:870px;text-align:center"><img src="logo-wordmark.png" style="height:96px"></div>""")

# nav del tour
R("const progB=[...prog.querySelectorAll('b')];", """const progB=[...prog.querySelectorAll('b')];
const NAV=[['home','Inicio'],['serv','Servicios'],['proj','Proyectos'],['diag','Cotizar'],['about','Nosotros'],['blog','Blog']];
$('#tnav').innerHTML=NAV.map(n=>`<span><b></b><i style="position:relative;font-style:normal">${n[1]}</i></span>`).join('');
const navEl=[...document.querySelectorAll('#tnav span')];""")
R("      progB.forEach((b,k)=>b.style.width=(k<ti?100:k===ti?cl(ls/dur)*100:0)+'%');",
  "      navEl.forEach((n,k)=>{const on=k===ti,done=k<ti;n.firstChild.style.width=(on?100:0)+'%';n.firstChild.style.opacity=on?cl(ls/.3):0;n.lastChild.style.color=on?'#050505':done?'#c5c5c5':'#8b8b8b'});")
R("  $('#brand').style.opacity=t<4?0:.9;", "  $('#brand').style.opacity=t<4||t>=44?0:.95;$('#tnav').style.opacity=t<4.2||t>=43.8?0:1;")
open('tour.html', 'w', encoding='utf-8').write(t)
print('ok')
