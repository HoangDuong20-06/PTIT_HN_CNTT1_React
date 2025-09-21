import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, showNotification } from "../store/store";
import type { RootState } from "../store/store";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

export default function YourCart() {
  const { cart, products } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ id: number; name: string; quantity: number } | null>(null);
  const [newQuantity, setNewQuantity] = useState(1);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openModal = (item: { id: number; name: string; quantity: number }) => {
    setSelectedItem(item);
    setNewQuantity(item.quantity);
    setModalOpen(true);
  };
  
  const handleUpdate = () => {
    if (!selectedItem) return;

    const product = products.find((p) => p.id === selectedItem.id);
    if (!product) return;
    const currentInCart = cart.find(c => c.id === selectedItem.id)?.quantity || 0;

    if (newQuantity > product.stock+currentInCart) {
      dispatch(showNotification({ type: "error", message: "Out of stock!" }));
      return;
    }

    dispatch(updateQuantity(selectedItem.id, newQuantity));
    dispatch(showNotification({ type: "update", message: "Quantity updated!" }));
    setModalOpen(false);
  };

  return (
    <div className="border p-4 rounded bg-red-50 w-[600px] min-h-[120px] h-auto relative">
      <h3 className="font-bold mb-2">Your Cart</h3>
      <table className="w-full">
        <thead>
          <tr className="bg-red-100">
            <th className="border-b p-2">STT</th>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Price</th>
            <th className="border-b p-2">Quantity</th>
            <th className="border-b p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-4">
                Empty product in your cart
              </td>
            </tr>
          ) : (
            cart.map((c, i) => (
              <tr key={c.id} className="text-center border-t">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{c.name}</td>
                <td className="p-2">{c.price} USD</td>
                <td className="p-2">{c.quantity}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => openModal(c)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(c.id))}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {cart.length > 0 && (
        <>
          <p className="mt-2">
            There are <b>{cart.length}</b> items in your shopping cart.
          </p>
          <p className="mt-2 text-right font-bold text-red-600 text-lg">
            {total} USD
          </p>
        </>
      )}
      <AnimatePresence>
        {modalOpen && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="font-bold mb-4">Update Quantity for {selectedItem.name}</h3>
              <input
                type="number"
                min={1}
                value={newQuantity}
                onChange={(e) => setNewQuantity(+e.target.value)}
                className="w-full border p-2 mb-4 text-center"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 rounded bg-blue-500 text-white"
                >
                  Update
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
