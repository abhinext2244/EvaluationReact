import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import AuthContextapi from './ContextApi/AuthContextapi.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextapi>
  <ChakraProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ChakraProvider>
  </AuthContextapi>
)
