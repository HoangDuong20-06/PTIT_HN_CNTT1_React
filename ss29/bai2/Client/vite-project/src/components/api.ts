import axios from "axios";

export interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

const API_URL = "http://localhost:8080/product";

export const getAllProduct = async (): Promise<Product[]> => {
  try {
    const res = await axios.get<Product[]>(API_URL);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi gọi API:", err);
    return [];
  }
};
