import clsx from 'clsx';

type Tag = 'p' | 'span'

interface ContentProps {
  children?: React.ReactNode;
  tag?: Tag;
  className?: string;
}

export const Content = ({
  children,
  tag = 'p',
  className
}: ContentProps) => {
  const Component = tag
  return (
    <Component
      className={clsx(`m-0 font-medium text-base`, className)}
    >
      {children}
    </Component>
  )
}