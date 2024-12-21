import { useMemo } from 'react';
import Image from 'next/image';
import { CiUser } from 'react-icons/ci';

interface UserAvatarProps {
  userImage: string
}

export const UserAvatar = ({
  userImage
}: UserAvatarProps) => {

  const avatar = useMemo(() => {
    if (!userImage) {
      return <CiUser className="block w-full h-full absolute object-contain" />
    }
    return  (
      <Image
        src={userImage}
        alt="Picture of the author"
        width={100}
        height={100}
        className="block w-full h-full absolute object-contain"
      />
    )
  }, [userImage])

  return (
    <div className="w-full h-full">
      { avatar }
    </div>
  )
}