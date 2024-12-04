import NextAuth, { type AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredencialsProvider from 'next-auth/providers/credentials'

import prisma from '@/shared/lib/prismadb'

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
        return null
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