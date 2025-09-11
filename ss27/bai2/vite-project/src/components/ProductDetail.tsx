import {Link, useParams} from 'react-router-dom'
import {products} from "./data"
export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === Number(id));
     if (!product) {
    return <h3 className="p-6 text-red-500">Sản phẩm không tồn tại</h3>;
  }
  return (
    <div className="p-4 text-start">
      <h3 className='text-start text-xl mb-[10px]'><b>Chi tiết sản phầm</b></h3>
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-600">Giá: {product.price.toLocaleString()} VND</p>
      <p className="mt-2">{product.description}</p>
      <Link to = "/products" className='text-blue-500'>Quay về danh sách sản phẩm</Link>
    </div>
  )
}
