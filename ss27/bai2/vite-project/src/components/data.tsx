export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: "iPhone 15", price: 25000000, description: "Điện thoại Apple mới nhất" },
  { id: 2, name: "Samsung Galaxy S24", price: 22000000, description: "Điện thoại flagship của Samsung" },
  { id: 3, name: "MacBook Pro M3", price: 45000000, description: "Laptop mạnh mẽ cho dân lập trình" },
  { id: 4, name: "AirPods Pro 2", price: 5500000, description: "Tai nghe không dây chống ồn" },
  { id: 5, name: "Apple Watch Series 9", price: 12000000, description: "Đồng hồ thông minh Apple" },
];
