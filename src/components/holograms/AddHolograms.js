import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addHologram } from '../../redux/actions/hologramActions'
// import HologramInfo from './HologramInfo';

class AddHolograms extends Component {
  state = {
    hologramName: '',
    hologramOf: '',
    dimensionsWidth: 0,
    dimensionsHeight: 0,
    price: 0,
    quantity: '',
    description: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addHologram(this.state)
  }
  render() {
    return (
      <div className="container">
        <div className="row center-align">
          <div className="col s7">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Add Hologram</h5>
              <div className="input-field">
                <label htmlFor="hologramName">Name</label>
                <input type="text" id="hologramName" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="hologramOf">Who is in the hologram</label>
                <input type="text" id="hologramOf" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="dimensionsWidth">Dimenstions - Width</label>
                <input type="number" id="dimensionsWidth" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="dimensionsHeight">Dimenstions - Height</label>
                <input type="number" id="dimensionsHeight" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn light-blue lighten-1 z-depth-0">Add</button>
              </div>
            </form>
          </div>
          <div className="col s5">
            <div className="container card">
              <div className="card-title z-depth-2 light-green">
                Status:
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHologram: (hologram) => dispatch(addHologram(hologram))
  }
}

export default connect(null, mapDispatchToProps)(AddHolograms)

