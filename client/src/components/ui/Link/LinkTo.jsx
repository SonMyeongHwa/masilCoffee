import React from 'react'
import { Link } from 'react-router-dom'



function LinkTo({there, style}) {
  

  return (
    <Link to={there.to} style={{...style}}>
      {there.name}
    </Link>
  )
}

export default LinkTo
