import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,HashRouter} from "react-router-dom";
import './index.css'
import App from './src_router/components/app'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'))