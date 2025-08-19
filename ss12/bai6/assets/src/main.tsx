import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AdminIndex from './AdminIndex.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdminIndex />
  </StrictMode>,
)
