import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import  Usercontextprovider from "./context/Usercontext.jsx";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(


 <  Usercontextprovider >
  < BrowserRouter>
    <App />
    </BrowserRouter>
    </ Usercontextprovider>

)