import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Children_Comp from './Children_Comp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Children_Comp fullname='Nguyễn Văn Nam' />
  </StrictMode>,
)
