import React from 'react'
import { connect } from 'react-redux'

const HologramInfo = ({ match: {params: { id }}}) =>  {
  return (
    <div className="container section hologram-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Hologram Title - {id} </span>
          <p>lorsfdasfasdfsdfas asdfasdfsdfsad sdfsadfasdfsad sdfasdfsadfsadf asdfasdfsadf sadfsadf asdfsad fasdf asdf sadf jowierpewsad f</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Hashal Jhaveri</div>
          <div>today 4 am</div>
        </div>
      </div>      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    holograms: state.hologram.holograms
  }
}

export default connect(mapStateToProps)(HologramInfo)
