import sys, asyncio
from playwright.async_api import async_playwright
PAGES={'home':'/','soluciones':'/soluciones-y-tecnologias','proyectos':'/proyectos','nosotros':'/nosotros','diagnostico':'/diagnostico','blog':'/blog'}
W,H,DPR=1440,900,2
async def main(only):
    async with async_playwright() as p:
        b=await p.chromium.launch(channel='chrome')
        ctx=await b.new_context(viewport={'width':W,'height':H},device_scale_factor=DPR)
        for name,path in PAGES.items():
            if only and name not in only: continue
            pg=await ctx.new_page()
            await pg.goto('http://localhost:3111'+path,wait_until='networkidle')
            await pg.add_style_tag(content='nextjs-portal,[class*="fixed"]:not(header):not(header *){display:none!important}')
            await pg.wait_for_timeout(1500)
            total=await pg.evaluate('document.documentElement.scrollHeight')
            # warm scroll to trigger reveals
            y=0
            while y<total:
                await pg.evaluate(f'window.scrollTo(0,{y})');await pg.wait_for_timeout(250);y+=450
            n=min(-(-total//H),14)
            print(name,total,n)
            for i in range(n):
                await pg.evaluate(f'window.scrollTo(0,{i*H})');await pg.wait_for_timeout(900)
                if i==1:
                    await pg.evaluate("document.querySelectorAll('*').forEach(e=>{const p=getComputedStyle(e).position;if(p==='fixed'||p==='sticky')e.style.setProperty('display','none','important')})")
                await pg.screenshot(path=f'shots/{name}_{i:02d}.png')
            await pg.close()
        await b.close()
asyncio.run(main(sys.argv[1:]))
