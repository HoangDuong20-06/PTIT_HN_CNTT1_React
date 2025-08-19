import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormatName from './FormatName.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormatName />
  </StrictMode>,
)
