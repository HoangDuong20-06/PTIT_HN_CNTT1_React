export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: "iPhone 13 Pro", price: 1200, description: "Điện thoại cao cấp của Apple với chip A15 và camera tiên tiến." },
  { id: 2, name: "Samsung Galaxy S23 Ultra", price: 1300, description: "Smartphone flagship của Samsung với camera 200MP." },
  { id: 3, name: "MacBook Air M2", price: 1400, description: "Laptop siêu nhẹ, mỏng, chip M2 hiệu năng mạnh mẽ." },
  { id: 4, name: "Dell XPS 13", price: 1100, description: "Ultrabook tinh tế, màn hình InfinityEdge sắc nét." },
  { id: 5, name: "iPad Pro 12.9", price: 999, description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR." },
];

