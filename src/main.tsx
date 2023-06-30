import React from 'react'
import ReactDOM from 'react-dom/client'

// Update the "./ch_/App" to specify the relevant chapter.
import { App } from './ch3/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
