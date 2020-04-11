import productReducer from './productReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  products: productReducer
})
