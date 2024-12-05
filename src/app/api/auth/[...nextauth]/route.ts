import NextAuth, { type AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredencialsProvider from 'next-auth/providers/credentials'

import prisma from '@/shared/lib/prismadb'
import { ERROR } from "@/shared/utils/consts"
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredencialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error(ERROR.SERVER.INVALID_CREDENTIALS)
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          throw new Error(ERROR.SERVER.INVALID_CREDENTIALS)
        }

        const inValidPassword = bcrypt.compare(credentials.password, user.password)
        if (!inValidPassword) {
          throw new Error(ERROR.SERVER.INVALID_CREDENTIALS)
        }

        return user
      }
    })
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET as string
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}