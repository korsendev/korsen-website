t=open('tour.html',encoding='utf-8').read()
def R(a,b):
    global t
    assert a in t,a[:70]
    t=t.replace(a,b,1)
# escenario
R("width:1920px;height:1080px;background:var(--bg)","width:1080px;height:1920px;background:var(--bg)")
R("Math.min(innerWidth/1920,innerHeight/1080)","Math.min(innerWidth/1080,innerHeight/1920)")
R("#tnav{position:absolute;left:50%;top:34px;","#tnav{position:absolute;left:50%;top:196px;")
R("#tnav span{position:relative;padding:11px 22px;","#tnav span{position:relative;padding:10px 15px;")
R("#brand{position:absolute;left:64px;bottom:40px;z-index:70}","#brand{display:none}")
R(".kick{font:600 20px",".kick{font:600 22px")
R("h2{font:700 70px/1.04","h2{font:700 82px/1.04")
R(".sub{margin-top:30px;font:500 27px/1.45 'Space Grotesk';color:var(--t2);width:520px}",".sub{margin-top:28px;font:500 32px/1.45 'Space Grotesk';color:var(--t2);width:900px;margin-left:auto;margin-right:auto}")
R(".chip{position:absolute;display:flex;align-items:center;gap:12px;padding:13px 24px 13px 14px;",".chip{position:absolute;display:flex;align-items:center;gap:12px;padding:12px 22px 12px 13px;")
R("font:600 21px 'JetBrains Mono';letter-spacing:.05em;text-transform:uppercase;white-space:nowrap;box-shadow","font:600 20px 'JetBrains Mono';letter-spacing:.05em;text-transform:uppercase;white-space:nowrap;box-shadow")
# layouts: todo vertical
R("""const LAY={
 R:{mx:1335,my:575,s:.82,ry:-12,rx:3,cx:90,cy:340},
 L:{mx:585,my:575,s:.82,ry:12,rx:3,cx:1250,cy:340},
 C:{mx:960,my:722,s:.70,ry:0,rx:7,cx:0,cy:140,center:true}""","""const V={mx:540,my:1160,s:.70,ry:0,rx:6,cx:0,cy:300,center:true};
const LAY={R:V,L:V,C:V""")
R("width:1920px;text-align:center;","width:1080px;text-align:center;")
R("""<h2 ${L.center?'style="font-size:78px"':''}>""","""<h2 ${L.center?'style="font-size:84px;padding:0 40px"':''}>""")
# chips en vertical: posiciones fijas relativas al escenario
R("const x=fx*1920,y=fy*1080;","const VP=[[.30,.427],[.73,.43],[.52,.775]];const x=VP[i%3][0]*1080,y=VP[i%3][1]*1920;")
# intro
R("top:215px;text-align:center\"><img id=\"il\" src=\"logo-wordmark.png\" style=\"height:170px;","top:480px;text-align:center\"><img id=\"il\" src=\"logo-wordmark.png\" style=\"height:150px;")
R("top:470px;text-align:center\"><h2 style=\"font-size:116px;line-height:1.04\">","top:760px;text-align:center\"><h2 style=\"font-size:112px;line-height:1.04\">")
R("top:860px;text-align:center;font:600 26px","top:1180px;text-align:center;font:600 26px")
# cta
R('id="cc" style="position:absolute;left:0;right:0;top:250px;text-align:center"','id="cc" style="position:absolute;left:0;right:0;top:420px;text-align:center"')
R('<h2 style="font-size:112px;line-height:1.04;margin-top:6px">','<h2 style="font-size:104px;line-height:1.04;margin-top:6px;padding:0 30px">')
R('style="left:50%;top:690px;margin-left:-345px">','style="left:50%;top:1060px;margin-left:-345px;padding:26px 40px;font-size:34px">')
R('id="cu" style="position:absolute;left:0;right:0;top:870px;text-align:center"><img src="logo-wordmark.png" style="height:96px">','id="cu" style="position:absolute;left:0;right:0;top:1240px;text-align:center"><img src="logo-wordmark.png" style="height:100px">')
R("const F=[['home_00',{x:-260,y:80,ry:24,s:.42,d:0}],['proyectos_00',{x:1480,y:40,ry:-24,s:.42,d:1.3}],['diagnostico_00',{x:-180,y:640,ry:20,s:.38,d:2.1}],['blog_00',{x:1400,y:660,ry:-20,s:.38,d:.7}]];",
  "const F=[['home_00',{x:-330,y:90,ry:22,s:.46,d:0}],['proyectos_00',{x:720,y:260,ry:-22,s:.46,d:1.3}],['diagnostico_00',{x:-340,y:1400,ry:20,s:.42,d:2.1}],['blog_00',{x:700,y:1500,ry:-20,s:.42,d:.7}]];")
open('tour-v.html','w',encoding='utf-8').write(t)
