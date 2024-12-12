import Link from 'next/link';
import { HiOutlineBan } from "react-icons/hi";

import { useAppState } from '@/shared/hooks';
import { getUser } from '@/shared/store';
import { Content } from '@/shared/ui/Typography';
import { IUser } from '@/shared/model/user/types';

export const withInactiveUser = (Component: React.ComponentType) => {
  const user = useAppState(getUser) as IUser;

  if (!user.isActive) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <HiOutlineBan className="block w-12 h-12 mb-10" />
        <Link href="/settings" className="hover:text-blue-500">
          <Content tag="span">Activate user</Content>
        </Link>
      </div>
    )
  }

  return <Component />
}