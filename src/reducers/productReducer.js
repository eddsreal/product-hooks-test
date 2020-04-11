import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_SUCCESS,
  PRODUCTS_DOWNLOAD_ERROR,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_ERROR,
  GET_EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT
} from '../actions/types'

const initialState = {
  products: [],
  error: null,
  loading: false,
  editActive: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    //  Start Action
    case ADD_PRODUCT:
    case START_PRODUCTS_DOWNLOAD:
    case REMOVE_PRODUCT:
    case EDIT_PRODUCT:
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
        products: state.products.filter(product => product.id !== action.payload),
        loading: false
      }

    //  Edit Product
    case GET_EDIT_PRODUCT:
      return {
        ...state,
        editActive: action.payload
      }
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload.id ? product = { ...product, ...action.payload } : product),
        editActive: null
      }  
    //  Errors  
    case ADD_PRODUCT_ERROR:
    case PRODUCTS_DOWNLOAD_ERROR:
    case REMOVE_PRODUCT_ERROR:
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
  
}