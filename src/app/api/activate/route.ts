import { NextResponse } from 'next/server';

import prisma from "@/shared/lib/prismadb"
import { ERROR } from '@/shared/utils/consts';

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();
    if (!slug) {
      return new NextResponse(ERROR.CUSTOM.CAN_NOT_READ_SLUG, { status: 500 });
    }

    const user = await prisma.user.update({
        data: {
            isActive: true
        },
        where: {
            activeSlug: slug
        }
    })

    if (!user) {
      return new NextResponse(ERROR.CUSTOM.CAN_NOT_GET_USER_BY_SLUG, { status: 500 });
    }

    return NextResponse.json(user)
  } catch (e) {
    return new NextResponse(
      ERROR.SERVER.INTERNAL_ERROR,
      { status: 500, statusText: ERROR.SERVER.INTERNAL_ERROR }
    );
  }
}