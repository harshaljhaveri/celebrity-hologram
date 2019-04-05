import { combineReducers } from 'redux'

import authReducer from './authReducer'
import hologramReducer from './hologramReducer'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  hologram: hologramReducer,
  firebase: firebaseReducer
})

export default rootReducer
