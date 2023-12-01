import React from 'react'
import LinkTo from '../../../ui/Link/LinkTo'
import { ROUTES } from '../../../../router/Routes'

function MiniNav() {
  return (
    <div>
      <LinkTo there={{to: ROUTES.ORDER.path, name: "메뉴"}}/>
    </div>
  )
}

export default MiniNav
