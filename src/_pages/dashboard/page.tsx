'use client'

import { signOut } from 'next-auth/react'

export const DashboardPage = () => {

  return (
    <div>
      Login
      <button onClick={() =>signOut()}>Sign out</button>
    </div>
  )
}