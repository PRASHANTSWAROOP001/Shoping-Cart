import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import CartContextProvider from "./context/CartContextProvider"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  
  </StrictMode>,
)
