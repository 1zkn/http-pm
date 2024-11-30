import sharp from 'sharp'
import { colors } from "@/data/colors"

export default async function createSVG(width, height, color){
    if(color){
      if(!colors[color]) throw "No color found"
    }else{
      colors[color] = { r: 200, g: 200, b: 200, alpha: 1 }
    }
    
    
    const image = await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: colors[color]
    }
  })
  .png()
  .toBuffer()
  return image
}
