import React from 'react'
import LinkTo from '../../../ui/Link/LinkTo'
import { ROUTES } from '../../../../router/Routes'

function MidiumNav() {
  return (
    <div>
      <LinkTo there={{to: ROUTES.ORDER.path, name:"메뉴"}}/>
      <LinkTo there={{to: ROUTES.RECIPE.path, name:"굴조함"}}/>
    </div>
  )
}

export default MidiumNav
