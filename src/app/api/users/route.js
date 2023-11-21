import { user } from "@/utils/db";
import { NextResponse } from "next/server";



export function GET() {
    const data = user;
    return NextResponse.json(data, {
        status: 200
    })
}


export async function POST(req) {

    let payload = await req.json();
    console.log(payload);
    return NextResponse.json({
        message: "Hello Post"
    })

}