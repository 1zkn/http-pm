import { getStatusCode } from "@/data/statusCodes"

export async function GET(request, { params }) { 
  //URL Query Parameters
  const searchParams = request.nextUrl.searchParams
  
  const statusCode = (await params).status
  const codeInfo = getStatusCode(statusCode)

  if(searchParams.get('format') === 'json'){
    return Response.json(codeInfo)
  }else{
    return new Response(`${codeInfo.code} ${codeInfo.name}`, {
      status: codeInfo.code
    })
  }
  
}