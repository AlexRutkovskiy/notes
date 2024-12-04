import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ToasterContext } from '@/shared/context'

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
        className={`${inter.className} bg-gray-200`}
      >
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
