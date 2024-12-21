'use client'

import { NavLink } from "@/shared/ui/NavLink"
import { Title } from "@/shared/ui/Typography"
import { LINK_TO, TRANSLATE } from "@/shared/utils/consts"

export const CategoryPage = () => {

  return (
    <div className="flex items-center justify-between mb-10">
      <Title>
        {TRANSLATE.CATEGORIES_PAGE.TITLE}
      </Title>
      <NavLink href={LINK_TO.NEW_CATEGORY}>
        {TRANSLATE.CATEGORIES_PAGE.CREATE_CATEGORY}
      </NavLink>
    </div>
  )
}