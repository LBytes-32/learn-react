
import React from 'react'
import ReactDOM from 'react-dom/client'

// Update the "./ch_/App" to specify the relevant chapter.
import App from './ch4/App'
import App3 from "./ch3/App"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App3/>
    <App/>
  </React.StrictMode>,
)
