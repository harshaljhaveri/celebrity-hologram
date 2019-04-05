import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'

const SignedInLinks = (props) => {
  return(
    <ul className="right">
      <li><NavLink to='/'>Notifications</NavLink></li>
      {/* eslint-disable-next-line */}
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating light-blue lighten-1'>HJ</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
