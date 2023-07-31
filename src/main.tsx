import React from 'react'
//import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { app } from './firebase'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);