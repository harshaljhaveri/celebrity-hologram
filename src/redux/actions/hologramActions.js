import Client from './../../Client'

export const addHologram = (hologram) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_HOLOGRAM_REQUEST'
    })
    Client.addHologram(hologram).then(id =>
    dispatch({
      type: 'ADD_HOLOGRAM_DONE',
      id
    })).catch(
      dispatch({
        type: 'ADD_HOLOGRAM_FAIL'
      })
    )
  }
}
export const findAllHolograms = () => {
  return (dispatch) => {
    Client.getAllHolograms().then(holograms => 
    dispatch({
      type: 'FIND_ALL_HOLOGRAMS',
      holograms
    }))
  }
}
export const findHologramsById = (id) => {
  return (dispatch) => {
    Client.getHologramById(id).then(hologram => 
      dispatch({
        type: 'FIND_HOLOGRAMS_BY_ID',
        hologram
      }))
  }
}
export const removeHologramsById = (id) => {
  return (dispatch) => {
    Client.deleteHologram(id).then(hologram => 
      dispatch({
        type: 'REMOVE_HOLOGRAMS_BY_ID',
        id
      }))
  }
}

