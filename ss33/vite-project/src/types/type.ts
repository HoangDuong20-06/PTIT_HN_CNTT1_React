export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  stock: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}
