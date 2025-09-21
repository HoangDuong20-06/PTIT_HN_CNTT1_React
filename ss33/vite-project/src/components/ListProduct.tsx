import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/store";
import type { RootState } from "../store/store";
import "../App.css";

export default function ListProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);

  return (
    <div className="border rounded-lg bg-blue-50 w-[600px]">
      <div>
        <h3 className="font-bold mb-4 bg-[#337ab7] rounded-t-lg text-white p-2">
          List Products
        </h3>
      </div>
      <div className="p-4">
        {products.map((p) => (
          <div key={p.id} className="flex items-center mb-4 border-b pb-2">
            <img
              src={p.img}
              alt={p.name}
              className="w-[100px] h-[80px] mr-4 rounded"
            />
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h4 className="font-semibold text-start">{p.name}</h4>
                <span className="w-[300px] text-sm text-start text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  tempore ullam ipsa officiis non deserunt earum autem soluta.
                </span>
              </div>
              <div className="flex flex-col gap-[20px] ml-[50px]">
                <div className="text-sm text-gray-600 flex flex-col gap-[20px]">
                  <span>{p.price} USD</span>
                  <span>Stock: {p.stock}</span>
                </div>
                <div className="text-right mt-1">
                  <button
                    onClick={() => dispatch(addToCart(p))}
                    disabled={p.stock <= 0}
                    className={`px-2 py-1 rounded text-sm ${
                      p.stock > 0
                        ? "bg-red-500 text-white"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
