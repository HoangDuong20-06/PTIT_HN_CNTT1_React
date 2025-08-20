import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Children_Comp from "./Children_Comp";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Children_Comp id={1} productname="Bưởi ba roi" price={12000} quantity={6} />
  </StrictMode>,
)
