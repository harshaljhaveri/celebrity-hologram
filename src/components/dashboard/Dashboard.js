import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// import Notifications from './Notifications'
// import Holograms from '../holograms/Holograms'

import { findAllHolograms } from '../../redux/actions/hologramActions'

class Dashboard extends Component {

  constructor(props){
    super(props)
    props.findAllHolograms()
  }
  render(){
    return(
      <div className="dashboard container">
        <nav className="nav-wrapper">
          <div className="container">
          <ul className="center">
            <li><NavLink to='/all'>Viw all</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/addHolograms'>Add Holograms</NavLink></li>
          </ul>
          </div>
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAllHolograms: () => dispatch(findAllHolograms())
  }
}

export default connect(null, mapDispatchToProps)(Dashboard)
