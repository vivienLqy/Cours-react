import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom"
import Wrapper from './components/customHook/Wrapper'
import { UserProvider } from './components/Contexts/UserContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <Wrapper>
          <App />
        </Wrapper>
      </UserProvider>
    </Router>
  </React.StrictMode>,
)
