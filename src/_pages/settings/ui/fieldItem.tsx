import { Content } from '@/shared/ui/Typography';

interface FieldItemProps {
  label: string;
  value: string;
}

export const FieldItem = ({
  value,
  label,
}: FieldItemProps) => {
  return (
    <div>
      <Content tag='span' className="inline-block w-[120px] !font-bold">{`${label}:`}</Content>
      <Content tag='span'>{value}</Content>
    </div>
  )
}