import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default ({ children, initialState = {} }) => {

  const store = createStore(
    reducers, 
    initialState, 
    compose(
      applyMiddleware(thunk),
      typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
          window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        { children } 
      </BrowserRouter>          
    </Provider>
  )
}