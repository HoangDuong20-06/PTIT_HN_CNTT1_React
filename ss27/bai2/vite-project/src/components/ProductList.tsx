import {Link} from 'react-router-dom'
import {products} from "./data"
export default function ProductList() {
  return (
    <div className="p-4">
      <h3 className="text-start text-xl mb-[10px]"><b>Danh sách sản phẩm</b></h3>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg shadow p-4 bg-white">
            <h4 className="text-lg font-semibold">{p.name}</h4>
            <p className="text-gray-600">Giá: {p.price.toLocaleString()} VND</p>
            <Link
              to={`/products/${p.id}`}
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
