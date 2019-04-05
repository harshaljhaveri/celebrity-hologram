import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/signin' className='light-blue lighten-1'>Sing In</NavLink></li>
      <li><NavLink to='/register'>Sing Up</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks
