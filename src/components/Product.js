import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ product }) {
  const { name, price, id } = product
  return (
    <tr>
      <td>{name}</td>
      <td><span className="font-weight-bold">${price}</span></td>
      <td className="acciones">
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">Editar</Link>
        <button className="btn btn-danger">Eliminar</button>
      </td>
    </tr>
  )
}
