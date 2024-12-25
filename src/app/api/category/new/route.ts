import { NextResponse } from 'next/server';

import prisma from "@/shared/lib/prismadb"
import { ERROR } from '@/shared/utils/consts';

export async function POST(request: Request) {
  try {
    const { userId, title, description = '' } = await request.json();
    if (!userId || !title) {
        return new NextResponse(
            ERROR.CUSTOM.CATEGORY_NOT_SET_TITLE, 
            { status: 400 }
        );
    }

    const existCategory = await prisma.category.findFirst({
        where: {
            title,
            userId
        }
    })

    if (existCategory) {
        return new NextResponse(
            ERROR.CUSTOM.CATEGORY_NOT_UNIQUE_TITLE, 
            { status: 400 }
        );
    }

    const category = await prisma.category.create({
        data: {
            title,
            description,
            userId
        }
    })

    return NextResponse.json(category)
  } catch (e) {
    return new NextResponse(
      ERROR.SERVER.INTERNAL_ERROR,
      { status: 500, statusText: ERROR.SERVER.INTERNAL_ERROR }
    );
  }
}