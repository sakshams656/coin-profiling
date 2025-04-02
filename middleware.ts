import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const requestHeaders = new Headers(request.headers);
  

  requestHeaders.set('Access-Control-Allow-Origin', '*');
  requestHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  requestHeaders.set('Access-Control-Allow-Headers', 'X-CMC_PRO_API_KEY, Content-Type');

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      headers: requestHeaders,
    });
  }


  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });


  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'X-CMC_PRO_API_KEY, Content-Type');

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)', 
  ]
};