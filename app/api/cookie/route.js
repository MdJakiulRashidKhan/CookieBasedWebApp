import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

export async function GET(req,res) {

    const token = req.cookies.get('token')
    return NextResponse.json({ token: token})
}

export async function POST(req,res) {
    req.cookies.delete('token');
    const unique_id = uuid();
    return NextResponse.json(
        {status:true,message:"Request completed"},
        {
            status: 201,
            headers: { 'Set-Cookie': `token=${unique_id}; Path=/` },
        }
    )
}