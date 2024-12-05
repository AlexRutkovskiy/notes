import React from 'react';

interface AuthLayoutProps {
  children: Readonly<React.ReactNode>
}

export default function SiteLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
