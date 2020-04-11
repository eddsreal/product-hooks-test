import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../actions/productActions'
import Product from './Product'

export default function Products() {
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)
  const dispatch = useDispatch() 
  let products = useSelector(state => state.products.products)

  useEffect(() => {
    const getProducts = () => dispatch( getProductsAction() )    
    getProducts()
  }, [dispatch])

  return (
    <Fragment>
      <h2 className="text-center-my-5">Listado de productos</h2>

      { error ? <p className="font-weight-bold alert alert-danger text center">Hubo un error.</p> : null }

      { loading ? 'Cargando...' : null }
      <table className="table table-stripped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? 'No hay productos' :
            products.map(product => (
              <Product 
                key={ product.id }
                product={product}
              />
            ))
          }
        </tbody>
      </table>
    </Fragment>
  )
}
