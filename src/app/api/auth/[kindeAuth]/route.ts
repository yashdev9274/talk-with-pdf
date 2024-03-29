import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: any
) {
    // const endpoint = params.kindeAuth;
    // return handleAuth(request, endpoint);

    const endpoint = params.kindeAuth;
    const handler = await handleAuth(request, endpoint);
    return NextResponse.json(handler);
} 