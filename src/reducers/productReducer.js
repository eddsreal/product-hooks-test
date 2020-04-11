import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_SUCCESS,
  PRODUCTS_DOWNLOAD_ERROR,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_ERROR
} from '../actions/types'

const initialState = {
  products: [],
  error: null,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    //  Start Action
    case ADD_PRODUCT:
    case START_PRODUCTS_DOWNLOAD:
    case REMOVE_PRODUCT:
      return {
        ...state,
        loading: true
      }
    //  Add Product    
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [ ...state.products, action.payload ]
      }
    //  Fetch Products
    case PRODUCTS_DOWNLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...action.payload]
      }
    //  Delete Product
    case REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }
    //  Errors  
    case ADD_PRODUCT_ERROR:
    case PRODUCTS_DOWNLOAD_ERROR:
    case REMOVE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
  
}