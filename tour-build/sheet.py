import sys
from PIL import Image
ts=sys.argv[1:]
M=Image.new('RGB',(2*960,-(-len(ts)//2)*540))
for i,t in enumerate(ts):
    M.paste(Image.open(f'prev_{t}.png').convert('RGB').resize((960,540)),((i%2)*960,(i//2)*540))
M.save('prevsheet.jpg',quality=85)
