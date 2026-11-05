import asyncio, pathlib, json
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(channel='chrome');pg=await b.new_page()
        await pg.goto(pathlib.Path('tour.html').resolve().as_uri())
        await pg.wait_for_function('window.READY===true')
        ev=await pg.evaluate('window.EVENTS');json.dump(ev,open('events.json','w'));print(len(ev))
        await b.close()
asyncio.run(main())
