import React from 'react';

interface AuthLayoutProps {
  children: Readonly<React.ReactNode>
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full h-full flex items-center justify-center p-10">
      <div className="p-12 w-full max-w-[600px] bg-white rounded-2xl shadow">
        {children}
      </div>
    </div>
  );
}
