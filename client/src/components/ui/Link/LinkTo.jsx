import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../router/Routes';





function LinkTo({there, style}) {  

  return (
    <Link to={there.to} style={style}>
      {there.name}
    </Link>
  )
}

export default LinkTo
