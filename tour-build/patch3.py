t=open('tour.html',encoding='utf-8').read()
def R(a,b):
    global t
    assert a in t,a[:60]
    t=t.replace(a,b,1)
R("const TOTAL=50, FADEEND=2;","const TOTAL=52, FADEEND=2;\nconst K=1.875/2;   // 128 BPM: 1 compás = 1.875 s reales = 2 s de la línea de tiempo")
R("{id:'cta',s:44,e:50,type:'cta'}","{id:'cta',s:44,e:52,type:'cta'}")
R("window.setTime=setTime;","window.setTime=r=>setTime(r/K);")
R("if(P.has('t'))setTime(+P.get('t'))","if(P.has('t'))window.setTime(+P.get('t'))")
open('tour.html','w',encoding='utf-8').write(t)
