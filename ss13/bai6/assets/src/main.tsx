import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListPost from './ListPost.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListPost />
  </StrictMode>,
)
