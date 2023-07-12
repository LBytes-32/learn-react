
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import App3 from "./ch3/App"
import App4 from './ch4/App'
import App6 from "./ch6/App"

//import ChK from "./chK/App"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App4/>
    <App6/>
  </React.StrictMode>
)
