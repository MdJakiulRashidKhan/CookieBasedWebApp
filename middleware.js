import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request) => {

    const authCookie = request.cookies.get("token")?.value;

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if(authCookie === undefined){
            return NextResponse.redirect(new URL('/', request.url));
        }else{
            return NextResponse.next();
        }
    }
};

export const config = {
    matcher: ["/dashboard"],
};