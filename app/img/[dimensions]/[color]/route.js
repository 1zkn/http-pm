import createSVG from '@/utils/createSVG';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    
    try {
  
        const dimensions = (await params).dimensions
        const color = (await params).color
      
        //String to Number
        const [width, height] = dimensions.split("x").map(Number)
        
        if(!width || !height || isNaN(width) || isNaN(height)){
          return new Response("Invalid format", {
            status: 400
          })
        }
        if(width < 1 || height < 1 || width > 2000 || height > 2000 ){
          return new Response("Dimensions must be between 1 and 2000 pixels", {
            status: 400
          })
        }
        
        const image = await createSVG(width, height, color)
        
        return new NextResponse(image, {
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable'
          },
        })
      } catch (error) {
        //console.error('Error generating image:', error);
        return new NextResponse(`Error generating image: ${error}`, { status: 500 });
      }

}  