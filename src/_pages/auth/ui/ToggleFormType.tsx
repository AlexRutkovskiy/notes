import { TabType } from '@/_pages/auth/model/types';
import { TAB } from '@/_pages/auth/model/constans';

import { CONTENT } from '../model/content'

interface ToggleFormTypeProps {
  activeTab: TabType
  toggleAction: () => void
}

export const ToggleFormType = ({
  activeTab,
  toggleAction
}: ToggleFormTypeProps) => {
  return (
    <div className='flex items-center gap-2 text-gray-500'>
      <div>
        {
          activeTab !== TAB.LOGIN
            ? CONTENT.TOGGLE_FORM.DESCRIPTION.REGISTER
            : CONTENT.TOGGLE_FORM.DESCRIPTION.LOGIN
        }
      </div>
      <div
        onClick={toggleAction}
        className='cursor-pointer hover:underline text-blue-500 transition'
      >
        {
          activeTab !== TAB.LOGIN
            ? CONTENT.TOGGLE_FORM.LINK.REGISTER
            : CONTENT.TOGGLE_FORM.LINK.LOGIN
        }
      </div>
    </div>
  )
}