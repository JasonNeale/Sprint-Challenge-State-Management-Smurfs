// External imports
import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Asset imports
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

// Local imports
import reducer from './redux/reducers/index'
import App from "./App"


const store = createStore( reducer, applyMiddleware( thunk ))

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
document.getElementById( "root" ));