import {NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function GET (){
    try{
        const findProducts = await Backendless.Data.of('ProductsStarbucks').find();
        return NextResponse.json({message: 'Find Products Success', data: findProducts}, {status: 200});

    } catch(error){
        return NextResponse.json({message: 'Find Products Failed', error},{status: 500});
    }
}