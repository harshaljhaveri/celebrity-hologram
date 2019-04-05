import React from 'react'
import { connect } from 'react-redux'

import Hologram from './Hologram'

const Holograms = ({holograms}) => {

  /* eslint-disable */
  console.log('=========================')
  console.log('holograms : ',  JSON.stringify(holograms, null, 2) )
  console.log('=========================')
  /* eslint-enable */

  const hologramsLayout = holograms.map(hologram => <Hologram hologram={hologram.hologram} id={hologram.id} key={hologram.id} />)

  return (
    <div className="container">
      <div className="hologram-list inline">
        {hologramsLayout}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    holograms: state.hologram.holograms
  }
 }

export default connect(mapStateToProps)(Holograms)
