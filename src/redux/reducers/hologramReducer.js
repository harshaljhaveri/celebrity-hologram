const initState = {
  holograms: [],
  selectedHologram: null,
  recentlyAddedHologramIds: [],
  addHoloGram: {
    isRequestLoading: false,
    successId: null,
    error: false
  },
  removedId: null
}

const hologramReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_HOLOGRAM_REQUEST':
      return {
        ...state,
        addHoloGram: {
          isRequestLoading: true,
          successId: null,
          error: false
        },
        recentlyAddedHologramIds: [action.id, ...state.recentlyAddedHologramIds]
      }
    case 'ADD_HOLOGRAM_DONE':
      return {
        ...state,
        addHoloGram: {
          isRequestLoading: false,
          successId: action.id,
          error: false
        },
        recentlyAddedHologramIds: [action.id, ...state.recentlyAddedHologramIds] 
      }
    case 'ADD_HOLOGRAM_FAIL':
      return {
        ...state,
        addHoloGram: {
          isRequestLoading: false,
          successId: action.id,
          error: true
        },
        recentlyAddedHologramIds: [action.id, ...state.recentlyAddedHologramIds] 
      }
    case 'FIND_ALL_HOLOGRAMS':
      return{
        ...state,
        holograms: action.holograms
      }
    case 'FIND_HOLOGRAMS_BY_ID':
      return {
        ...state,
        selectedHologram : action.hologram
      }
    case 'REMOVE_HOLOGRAMS_BY_ID':

      const { selectedHologram } = state

      if(selectedHologram && (action.id === selectedHologram.id)) {
        return {
          ...state,
          selectedHologram: {}
        }
      }
      return {
        ...state,
        holograms: state.holograms.filter(h => h.id !== action.id)
      }

    default:
      return state
  }
}

export default hologramReducer
