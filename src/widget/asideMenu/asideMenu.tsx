'use client'

import React from 'react';
import { signOut } from 'next-auth/react'
import { HiMiniArrowLeftEndOnRectangle } from 'react-icons/hi2';

import { Routes } from '@/feature/routes/Routes';

import { Button } from '@/shared/ui/Button';
import { Content } from '@/shared/ui/Typography'
import { IUser } from '@/shared/model/user/types';

interface AsideMenuProps {
  user: IUser;
}

export const AsideMenu = ({ user }: AsideMenuProps) => {
  return (
    <aside className="flex flex-col justify-between w-[250px] border-r-2 border-r-gray-300 px-5 py-10">
      <Routes user={user} />
      <Button fullWidth onClick={()=> signOut()}>
        <HiMiniArrowLeftEndOnRectangle className="w-6 h-6 mr-2 block" />
        <Content>Log Out</Content>
      </Button>
    </aside>
  )
}