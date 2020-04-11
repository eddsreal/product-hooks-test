import React, {Fragment} from 'react'
import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import Products from './Products'
import NewProduct from './NewProduct'
import EditProduct from './EditProduct'

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/new" component={NewProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default App
