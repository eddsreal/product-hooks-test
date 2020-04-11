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
} from './types'
import { axiosClient } from '../config'
import Swal from 'sweetalert2'

export function createNewProductAction(product) {
  return async dispatch => {
    dispatch({ type: ADD_PRODUCT })

    try {
      await axiosClient.post('/products', product)
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: product })
      Swal.fire('Correcto', 'El producto se agregó correctamente.', 'success')
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: true })
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error intenta de nuevo.'
      })
    }
  }
}

export function getProductsAction() {
  return async dispatch => {
    dispatch({ type: START_PRODUCTS_DOWNLOAD })

    try {
      const response = await axiosClient.get('/products')
      dispatch({ type: PRODUCTS_DOWNLOAD_SUCCESS, payload: response.data })
    } catch (error) {
      dispatch({ type: PRODUCTS_DOWNLOAD_ERROR, payload: true })
    }
  }
}

export const removeProductAction = productId => async dispatch => {
  dispatch({ type: REMOVE_PRODUCT })

  try {
    await axiosClient.delete(`/products/${productId}`)
    dispatch({ type: REMOVE_PRODUCT_SUCCESS, payload: productId })
    Swal.fire('Correcto', 'El producto se eliminó correctamente.', 'success')
  } catch (error) {
    dispatch({ type: REMOVE_PRODUCT_ERROR, payload: true })
  }
}
