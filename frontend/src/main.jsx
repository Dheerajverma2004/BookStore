import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from "./context/AuthProvider"; // Import AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
      <div className="dark:bg-slate-600 dark:text-white">
        <App />
      </div>
    </AuthProvider>   
  </BrowserRouter>,
)
