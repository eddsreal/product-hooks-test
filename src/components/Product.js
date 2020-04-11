import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeProductAction, getEditProduct } from '../actions/productActions'
import Swal from 'sweetalert2'

export default function Product({ product }) {
  const { name, price, id } = product
  const dispatch = useDispatch()
  const history = useHistory()

  const removeProduct = async productId => {
    const confirmation = await Swal.fire({
      title: '¿Estás Seguro?',
      text: 'Un Producto que se elimina no se puede recuperar.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar!',
      cancelButtonText: 'Cancelar'
    })
    if (confirmation.value) {
      dispatch( removeProductAction(productId) )
    }
  }

  const redirectEdit = product => {
    history.push(`/products/edit/${product.id}`)
    dispatch( getEditProduct(product) )
  }

  return (
    <tr>
      <td>{name}</td>
      <td><span className="font-weight-bold">${price}</span></td>
      <td className="acciones">
        <button type="button" onClick={ () => redirectEdit(product) } className="btn btn-primary mr-2">Editar</button>
        <button className="btn btn-danger" onClick={ () => removeProduct(id) }>Eliminar</button>
      </td>
    </tr>
  )
}
