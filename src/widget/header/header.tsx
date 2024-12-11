'use client'

import React from 'react';
import clsx from 'clsx';

import { Content, Title } from '@/shared/ui/Typography';
import { IUser } from '@/shared/model/user/types';

interface HeaderProps {
  user: IUser;
}

export const Header = ({
  user,
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between h-[60px] border-b-2 border-b-gray-300 px-5 py-2.5">
      <Title tag='h2'>Notes</Title>
      <div className="flex items-center gap-3">
        <div className={clsx(`block w-4 h-4 rounded-[50%] border border-gray-400 shadow`,
          user.isActive && 'bg-green-500 border-green-600')}
        ></div>
        <div className="w-40">
          <Content className="truncate ...">{user.fullName}</Content>
        </div>
      </div>
    </header>
  )
}