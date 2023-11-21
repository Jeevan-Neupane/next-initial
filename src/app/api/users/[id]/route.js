import { user } from "@/utils/db";
import { NextResponse } from "next/server";



export function GET(req, content) {
    let id = content.params.id;
    const data = user.filter((item) => {
        return item.id === parseInt(id);
    });
    console.log(data[0]);
    return NextResponse.json(data.length === 0 ? {
        message: "No data found"
    } : data[0], {
        status: 200
    })
}