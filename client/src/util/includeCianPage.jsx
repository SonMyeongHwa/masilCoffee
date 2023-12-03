import React from 'react'
import { ROUTES } from '../router/Routes'

const CianPages = [
  ROUTES.ADMINMENU.path,
  ROUTES.ADMINORDER.path,
  ROUTES.ADMINMUSER.path
];

function includeCianPage(location) {
  return CianPages.includes(location)
}

export default includeCianPage
