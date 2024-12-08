import NextAuth, { type AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredencialsProvider from 'next-auth/providers/credentials'
import { JWT } from 'next-auth/jwt';

import bcrypt from 'bcrypt';

import prisma from '@/shared/lib/prismadb'
import { ERROR } from "@/shared/utils/consts"
import type { ISessionUser, IUser } from "@/shared/model/user/types"

type TokenWithUser = JWT & IUser;

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

        const user: IUser | null = await prisma.user.findUnique({
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
      },
    })
  ],
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user}
    },
    async session(params) {
      const session = params.session
      const token = params.token as TokenWithUser;

      session.user = {
        id: token.id,
        email: token?.email
      } as ISessionUser

      return session;
    }
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET as string
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}