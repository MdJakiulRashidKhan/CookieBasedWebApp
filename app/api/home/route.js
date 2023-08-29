import { NextResponse } from 'next/server'
 
export async function GET(request) {
    const data = {
        "message": "Welcome to our API!",
        "version": "1.0"
    };
    return NextResponse.json({ data })
}