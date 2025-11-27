import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import { Router } from 'wouter'

// IMPORTANT for GitHub Pages:
const base = "/submission-site"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router base={base}>
      <App />
    </Router>
  </React.StrictMode>,
)
