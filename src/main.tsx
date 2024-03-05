import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {AppProvider} from './context/productcontext'
import { CartProvider } from './context/cartcontext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </AppProvider>
  </React.StrictMode>,
)
