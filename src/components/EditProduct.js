import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editProductAction } from '../actions/productActions'
import { useHistory } from 'react-router-dom'

export default function EditProduct() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [ product, setProduct ] = useState({
    name: '',
    price: ''
  })

  const editActive = useSelector(state => state.products.editActive)  

  useEffect(() => {
    setProduct(editActive)
  }, [editActive])

  const { name, price } = product
  const onChangeProduct = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const submitEditProduct = e => {
    e.preventDefault()
    dispatch( editProductAction(product) )
    history.push('/')
  }
  
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>
            <form onSubmit={ submitEditProduct }>
              <div className="form-group">
                <label>Nombre de Producto</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nombre de Producto"
                  name="name"
                  value={name}
                  onChange={onChangeProduct}
                />
              </div>
              <div className="form-group">
                <label>Precio de Producto</label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Precio de Producto"
                  name="price"
                  value={price}
                  onChange={onChangeProduct}
                />              
              </div>
              <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}