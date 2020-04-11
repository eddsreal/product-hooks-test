import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewProductAction } from '../actions/productActions'

export default function NewProduct({ history }) {
  const [ name, saveName ] = useState('')
  const [ price, savePrice ] = useState(0)

  //  Redux Selectors
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  //  Using React Redux Hook to use Dispatch
  const dispatch = useDispatch()

  //  Call Create New Product Action dispatching it
  const addProduct = product => dispatch( createNewProductAction(product) )

  const submitNewProduct = e => {
    e.preventDefault()

    //  Validate Form
    if (name.trim === '' || price <= 0) {
      return
    }
    //  Check if there's no erros

    //  Create the product
    addProduct({ name, price })

    history.push('/')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo Producto</h2>
            <form
              onSubmit={submitNewProduct}
            >
              <div className="form-group">
                <label>Nombre de Producto</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nombre de Producto"
                  name="name"
                  onChange={e => saveName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>Precio de Producto</label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Precio de Producto"
                  name="price"
                  onChange={e => savePrice(Number(e.target.value))}
                  value={price}
                />              
              </div>
              <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
            </form>

            { loading ? <p>Cargando...</p> : null }
            { error ? <p className="alert alert-danger p2"> Ocurrió un error </p> : null }
          </div>
        </div>
      </div>
    </div>
  )
}
