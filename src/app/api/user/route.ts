import { NextResponse } from 'next/server';

import prisma from "@/shared/lib/prismadb"
import { ERROR } from '@/shared/utils/consts';

export async function POST(request: Request) {
  try {
    const {id, email} = await request.json();
    if (!id || !email) {
      return new NextResponse(ERROR.CUSTOM.CAN_NOT_GET_USER, { status: 500 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id,
        email
      }
    })
    if (!user) {
      return new NextResponse(ERROR.CUSTOM.CAN_NOT_GET_USER, { status: 500 });
    }

    return NextResponse.json(user)
  } catch (e) {
    return new NextResponse(
      ERROR.SERVER.INTERNAL_ERROR,
      { status: 500, statusText: ERROR.SERVER.INTERNAL_ERROR }
    );
  }
}