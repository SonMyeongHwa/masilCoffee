import React from 'react'
import LinkTo from '../../ui/Link/LinkTo'
import { ROUTES } from '../../../router/Routes'

function IpadProHeader() {
  return (
    <div>
      <LinkTo there={{to: ROUTES.ORDER.path, name: ORDER}}/>
      <LinkTo there={{to: ROUTES.RECIPE.path, name: RECIPE}}/>
    </div>
  )
}

export default IpadProHeader
