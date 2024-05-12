import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { IntlProvider } from "react-intl";

import './index.scss'

window.env = { baseUrl: import.meta.env.PROD ? "https://jcc.dcc.fceia.unr.edu.ar/2024/" : "http://localhost:5173/" }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={"es-AR"} defaultLocale="es-AR" >
      <App />
    </IntlProvider>
  </React.StrictMode>,
)
