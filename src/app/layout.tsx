import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  ToasterContext,
  AuthContext,
  LoadingContext,
  StoreContext
} from '@/shared/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-200 relative`}
      >
        <AuthContext>
          <StoreContext>
            <LoadingContext>
              <ToasterContext />
              {children}
            </LoadingContext>
          </StoreContext>
        </AuthContext>
      </body>
    </html>
  );
}
