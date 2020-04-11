import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_SUCCESS,
  PRODUCTS_DOWNLOAD_ERROR
} from '../actions/types'

const initialState = {
  products: [],
  error: null,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {  
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [ ...state.products, action.payload ]
      }
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case START_PRODUCTS_DOWNLOAD:
      return {
        ...state,
        loading: true
      }
    case PRODUCTS_DOWNLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...action.payload]
      }
    case PRODUCTS_DOWNLOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
  
}