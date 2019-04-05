import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeHologramsById } from './../../redux/actions/hologramActions'
// import Modal from 'react-modal'

// const modalStyle = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// }

class Hologram extends Component {
  // state = {
  //   modalIsOpen: false
  // }
  // toggleModal = () => {
  //   this.setState({ modalIsOpen: !this.state.modalIsOpen })
  // }

  removeHologram = (e) => {
    e.preventDefault()
    this.props.removeHologram(this.props.id)
  }

  render() {
    if(!this.props.hologram){
      return null
    }
    const { hologramName, price, dimensionsWidth, dimensionsHeight } = this.props.hologram
    const { id } = this.props
    const hologramInfoRout = `/hologram/${id}`
    return (
      <div className="card z-depth-1 hologram-details">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{hologramName}</span>
          <div className="divider" />
          <span className="card-content">
            {/* <Modal 
              isOpen={this.state.modalIsOpen}
              contentLabel="Modal"
              className="modalStyle"
            >
              <div className="card card-title">
                Do you want to permanently delete the hologram 
              </div>
              <button className="btn" onClick={this.toggleModal}> No, Close Modal</button>
              <button className="btn" onClick={this.toggleModal}> Yes, Remove Hologram</button>
            </Modal> */}
            <div className="row">
              <div className="col s12 m4">
                <p>{`Id: ${id}`}</p>
                <p>{`Price: $${price}`}</p>
                <p>{`Dimensions - HxL :${dimensionsHeight}cm X ${dimensionsWidth}cm`}</p>
              </div>
              <div className="col s12 m6 light-green">
                <h5>Hologram preivew will come here</h5>
              </div>
              <div className="col s12 m2 centered">
                <div className="row center-align">
                  <div className="col s6">
                    <Link to={hologramInfoRout} className="small material-icons">info</Link>
                    <div>More Info</div>
                  </div>
                  <div className="col s6">
                    <i onClick={this.removeHologram} className="small material-icons">delete_forever</i>
                    <div>Remove</div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     hologram: state.hologram.selectedHologram
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    removeHologram: (id) => dispatch(removeHologramsById(id))
  }
}

export default connect(null, mapDispatchToProps)(Hologram)
