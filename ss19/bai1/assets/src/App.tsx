import React, { useMemo } from 'react';
import "./App.css"
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  { id: 1, name: 'Sản phẩm A', price: 100000, quantity: 2 },
  { id: 2, name: 'Sản phẩm B', price: 200000, quantity: 1 },
];

const ShoppingCart: React.FC = () => {
  const totalPrice = useMemo(() => {
    console.log('Tính lại tổng giá trị đơn hàng...');
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()}₫ x {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Tổng: {totalPrice.toLocaleString()}₫</h3>
    </div>
  );
};

export default ShoppingCart;
