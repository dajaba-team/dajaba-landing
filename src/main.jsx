import 'pretendard/dist/web/static/pretendard-dynamic-subset.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle'
import { theme } from './theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
