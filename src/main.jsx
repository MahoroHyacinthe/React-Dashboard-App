
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import { UserContextProvider } from './Contexts/UserContext.jsx'
import { ProductContextProvider } from './Contexts/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <ProductContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ProductContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
