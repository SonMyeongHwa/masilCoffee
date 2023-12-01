import React from 'react'
import { ROUTES } from '../router/Routes'

const ROLE = {
  ADMIN: [
    {
      to: ROUTES.ADMINORDER.path,
      name: "관리자 페이지"
    },
    {
      to: ROUTES.LOGOUT.path,
      name: "로그아웃"
    },
  ],
  COMMON: [
    {
      to: ROUTES.LOGIN.path,
      name: "로그인"
    },
    {
      to: ROUTES.LOGIN.path,
      name: "로그인"
    },
  ]
}

function menuRole() {
  return (
    <div>
      
    </div>
  )
}

export default menuRole
