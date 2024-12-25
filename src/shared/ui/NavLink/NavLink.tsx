'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface NavLinkProps {
    children: React.ReactNode;
    href: string;
}

export const NavLink = ({
    children,
    href,
}: NavLinkProps) => {
    return (
        <Link 
            href={href}
            className={clsx(`flex items-center py-1 px-5 cursor-pointer transition 
                    relative font-medium text-base min-h-[42px] border-2  border-gray-700 text-gray-700
                    hover:border-blue-500 hover:text-blue-500 rounded-md`
                )
            }
        >
            {children}
        </Link>
    )
}