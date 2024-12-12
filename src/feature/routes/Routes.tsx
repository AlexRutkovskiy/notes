'use router'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { Content } from '@/shared/ui/Typography';
import { IUser } from '@/shared/model/user/types';

import { routes } from './routes';

interface RoutesProps {
  user: IUser
}

export const Routes = ({ user }: RoutesProps) => {
  const params = usePathname();

  return (
    <nav>
      {routes.map((route) => {
        const isActive = params === route.path;
        const ComponentIcon = route.icon;

        return (
          <div
            key={route.id}
            className={clsx(`flex items-center py-2 cursor-pointer hover:text-blue-500 transition relative
              hover:before:content-[""] before:content-none before:absolute before:w-1 before:h-full before:bg-blue-500
              before:top-0 before:left-[-10px]`,
              isActive && 'before:content-[""] text-blue-500'
            )}
          >
            <ComponentIcon className="block w-6 h-6 mr-2" />
            <Link href={route.path}>
              <Content>{route.label}</Content>
            </Link>
          </div>
        )
      })}
    </nav>
  )
}