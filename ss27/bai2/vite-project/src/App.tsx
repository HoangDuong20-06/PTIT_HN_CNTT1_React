import { Routes,Route,Navigate  } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
function App() {
  return (
    <>
      <Header/>
      <Routes>
         <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
      </Routes>
    </>
  )
}

export default App
