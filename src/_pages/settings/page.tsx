import { UserAvatar } from './ui/avatar';
import { FieldItem } from './ui/fieldItem';

import { ActivateUser } from '@/feature/activateUser';

import { Title } from '@/shared/ui/Typography';
import { useAppState } from '@/shared/hooks';
import { getUser } from '@/shared/store';
import type { IUser } from '@/shared/model/user/types';

export const SettingsPage = () => {
  const user = useAppState(getUser) as IUser;

  return (
    <div>
      <div className="mb-10">
        <Title>Settings</Title>
      </div>
      <div className="flex gap-10">
        <div className="w-[30%] max-w-[350px] min-w-[250px] relative aspect-square">
          <UserAvatar userImage={user.image} />
        </div>
        <div className="flex flex-col gap-2">
          <FieldItem label="Name" value={user.fullName} />
          <FieldItem label="Email" value={user.email} />
          <FieldItem label="Active" value={user.isActive ? "Active" : "Not Active"} />
          <FieldItem label="Created" value={new Date(user.createdAt).toLocaleDateString()} />
          <FieldItem label="Updated" value={new Date(user.updatedAt).toLocaleDateString()} />
          <div className="mt-10">
            <ActivateUser
              data={{
                name: user.fullName,
                email: user.email,
                slug: user.activeSlug
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}