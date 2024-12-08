
type Tag = 'p' | 'span'

interface ContentProps {
  children?: React.ReactNode;
  tag?: Tag;
}

export const Content = ({
  children,
  tag = 'p',
}: ContentProps) => {
  const Component = tag
  return (
    <Component
      className="m-0 font-medium text-base"
    >
      {children}
    </Component>
  )
}