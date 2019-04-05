import React, { Component } from 'react'
import { connect } from 'react-redux'

import { findHologramsById } from './../../redux/actions/hologramActions'
import Hologram from './Hologram';

class Search extends Component {

  state = {
    id: ''
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.props.findHologramsById(this.state.id)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    const {hologram} = this.props
    return (
      <div className="container">
        <h5 className="grey-text text-darken-3">Search Hologram</h5>
        <div className="divider"/>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSearch}>
            <div className="row">
              <div className="input-field col s3">
                <label htmlFor="id">Search By Id</label>
                <input type="text" id="id" onChange={this.handleChange} />
              </div>
              <div className="input-field col s1">
                <button className="btn light-blue lighten-1 z-depth-0">Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="divider"/>
        <div className="section">
          {
            hologram && <Hologram hologram={hologram} />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hologram: state.hologram.selectedHologram
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findHologramsById: (id) => dispatch(findHologramsById(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)

