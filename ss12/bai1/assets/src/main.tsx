import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ListCourse.js'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
