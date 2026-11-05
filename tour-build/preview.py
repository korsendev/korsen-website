import sys, asyncio, pathlib
from playwright.async_api import async_playwright
HTML=sys.argv[1];W=int(sys.argv[2]);H=int(sys.argv[3])
async def main(ts):
    async with async_playwright() as p:
        b=await p.chromium.launch(channel='chrome')
        pg=await b.new_page(viewport={'width':W,'height':H})
        await pg.goto(pathlib.Path(HTML).resolve().as_uri())
        await pg.wait_for_function('window.READY===true',timeout=30000)
        await pg.wait_for_timeout(1500)
        for t in ts:
            await pg.evaluate(f'setTime({t})');await pg.wait_for_timeout(250)
            await pg.screenshot(path=f'prev_{t}.png')
        await b.close()
asyncio.run(main([float(x) for x in sys.argv[4:]]))
