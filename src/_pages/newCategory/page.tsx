'use client'

import { GoBack } from "@/shared/ui/GoBack"
import { Title } from "@/shared/ui/Typography"
import { TRANSLATE } from "@/shared/utils/consts"

export const NewCategoryPage = () => {

  return (
    <div className="flex items-center justify-between gap-7 mb-10">
      <Title>
        {TRANSLATE.NEW_CATEGORY_PAGE.TITLE}
      </Title>
      <GoBack />
    </div>
  )
}