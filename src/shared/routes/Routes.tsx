'use router'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { routes } from './routes';
import { Content } from '@/shared/ui/Typography'

export const Routes = () => {
  const params = usePathname()

  return (
    <nav>
      {routes.map((route) => {
        const isActive = params === route.path;
        const Component = route.icon;

        return (
          <div
            key={route.id}
            className={clsx(`flex items-center py-2 cursor-pointer hover:text-blue-500 transition relative
              hover:before:content-[""] before:content-none before:absolute before:w-1 before:h-full before:bg-blue-500
              before:top-0 before:left-[-10px]`,
              isActive && 'before:content-[""] text-blue-500'
              )
            }
          >
            <Component className="block w-6 h-6 mr-2" />
            <Link href={route.path}>
              <Content>{route.label}</Content>
            </Link>
          </div>
        )
      })}
    </nav>
  )
}