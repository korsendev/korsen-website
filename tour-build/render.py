import sys, asyncio, pathlib, subprocess, glob, time
from playwright.async_api import async_playwright
FF=glob.glob(r'C:\Users\ramge\AppData\Local\Temp\claude\*\*\scratchpad\ff\imageio_ffmpeg\binaries\*.exe')[0]
FPS=60
async def main(a,b,out):
    ff=subprocess.Popen([FF,'-y','-loglevel','error','-f','image2pipe','-framerate',str(FPS),'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','fast','-crf','15','-pix_fmt','yuv420p','-vf','scale=out_color_matrix=bt709:out_range=tv','-colorspace','bt709','-color_primaries','bt709','-color_trc','bt709',out],stdin=subprocess.PIPE)
    async with async_playwright() as p:
        br=await p.chromium.launch(channel='chrome')
        pg=await br.new_page(viewport={'width':int(sys.argv[5]) if len(sys.argv)>5 else 1920,'height':int(sys.argv[6]) if len(sys.argv)>6 else 1080})
        await pg.goto(pathlib.Path(sys.argv[4] if len(sys.argv)>4 else 'tour.html').resolve().as_uri())
        await pg.wait_for_function('window.READY===true',timeout=60000)
        await pg.wait_for_timeout(2000)
        t0=time.time()
        for f in range(a,b):
            await pg.evaluate(f'setTime({f/FPS})')
            ff.stdin.write(await pg.screenshot(type='jpeg',quality=96))
            if (f-a)%100==0:print(out,f,round(time.time()-t0),flush=True)
        await br.close()
    ff.stdin.close();ff.wait()
a,b=int(sys.argv[1]),int(sys.argv[2]);asyncio.run(main(a,b,sys.argv[3]))
