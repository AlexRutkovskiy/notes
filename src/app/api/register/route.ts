import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { ERROR, ERROR_CODE } from '@/shared/utils/consts';
import { Prisma } from '@prisma/client';

import prisma from "@/shared/lib/prismadb"

export async function POST(request: Request) {
  try {
    const { fullName, email, password } = await request.json();
    if (!fullName || !email || !password) {
      return new NextResponse("Missing required fields!", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json({message: "Created"})
  } catch (e) {
    let message = ERROR.SERVER.INTERNAL_ERROR
    let code = 500;

    if (e instanceof Error) {
      message = e.message;
    }

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      message = e.message;

      if (e.code === ERROR_CODE.PRISMA.P2002) {
        message = ERROR.PRISMA.AUTH_NOT_UNIQUE
      }
    }

    return new NextResponse(message, { status: code, statusText: message });
  }
}