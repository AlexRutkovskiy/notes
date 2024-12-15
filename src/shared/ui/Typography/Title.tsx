import clsx from "clsx";
import { className } from 'postcss-selector-parser';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Position = 'left' | 'center' | 'right';

interface TitleProps {
  children: React.ReactNode;
  tag?: Tag;
  position?: Position;
  className?: string;
}

const style: Record<Tag, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
}

const pos: Record<Position, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export const Title = ({
  children,
  tag = 'h1',
  position = 'left',
  className,
  ...rest
}: TitleProps) => {
  const Component = tag;
  return (
    <Component
      className={clsx(`${style[tag]} ${pos[position]} text-gray-700`, className)}
      {...rest}
    >
      {children}
    </Component>
  )
}