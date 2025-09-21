import { createStore } from "redux";
import type { CartItem, Product } from "../types/type";
type NotificationType = "add" | "delete" | "update" | "error" | null;

interface Notification {
  type: NotificationType;
  message: string | null;
}

interface AppState {
  cart: CartItem[];
  products: Product[];
  notification: Notification;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Pizza",
    price: 10,
    img: "https://vietair.com.vn/Media/Images/pizza-ha-noi-o-dau-ngon-zpizza.jpg?",
    stock: 5,
  },
  {
    id: 2,
    name: "Hamburger",
    price: 15,
    img: "https://cdn.tgdd.vn/Files/2021/12/03/1402936/cach-lam-hamburger-bo-pho-mai-thom-ngon-nhu-ngoai-hang-202112031142454138.jpg",
    stock: 3,
  },
  {
    id: 3,
    name: "Bread",
    price: 20,
    img: "https://cdn.tgdd.vn/2020/08/CookProduct/Thumb-620x620-12.jpg",
    stock: 4,
  },
  {
    id: 4,
    name: "Cake",
    price: 10,
    img: "https://www.cet.edu.vn/wp-content/uploads/2018/01/cac-loai-banh-ngot-au.jpg",
    stock: 2,
  },
];

const initialState: AppState = {
  cart: [],
  products: initialProducts,
  notification: { type: null, message: null },
};
const ADD_TO_CART = "ADD_TO_CART" as const;
const REMOVE_FROM_CART = "REMOVE_FROM_CART" as const;
const UPDATE_QUANTITY = "UPDATE_QUANTITY" as const;

const SHOW_NOTIFICATION = "SHOW_NOTIFICATION" as const;
const HIDE_NOTIFICATION = "HIDE_NOTIFICATION" as const;
export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const updateQuantity = (id: number, quantity: number) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const showNotification = (notif: { type: Exclude<NotificationType, null>; message: string }) => ({
  type: SHOW_NOTIFICATION,
  payload: notif,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});

type CartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof updateQuantity>;

type NotificationAction =
  | ReturnType<typeof showNotification>
  | ReturnType<typeof hideNotification>;
const rootReducer = (
  state: AppState = initialState,
  action: CartAction | NotificationAction
): AppState => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (!product || product.stock <= 0) {
        return {
          ...state,
          notification: { type: "error", message: `${action.payload.name} is out of stock!` },
        };
      }

      const item = state.cart.find((c) => c.id === action.payload.id);
      const updatedCart = item
        ? state.cart.map((c) =>
            c.id === action.payload.id ? { ...c, quantity: c.quantity + 1 } : c
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        cart: updatedCart,
        products: state.products.map((p) =>
          p.id === action.payload.id ? { ...p, stock: p.stock - 1 } : p
        ),
        notification: { type: "add", message: `${action.payload.name} added to cart successfully!` },
      };
    }

    case REMOVE_FROM_CART: {
      const item = state.cart.find((c) => c.id === action.payload);
      if (!item) return state;

      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
        products: state.products.map((p) =>
          p.id === action.payload ? { ...p, stock: p.stock + item.quantity } : p
        ),
        notification: { type: "delete", message: "Removed item from cart" },
      };
    }

    case UPDATE_QUANTITY: {
      const cartItem = state.cart.find((c) => c.id === action.payload.id);
      if (!cartItem) return state;

      const diff = action.payload.quantity - cartItem.quantity;
      const product = state.products.find((p) => p.id === action.payload.id);
      if (!product) return state;

      if (diff > 0 && product.stock < diff) {
        return { ...state, notification: { type: "error", message: "Not enough stock!" } };
      }

      return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, quantity: action.payload.quantity } : c
        ),
        products: state.products.map((p) =>
          p.id === action.payload.id ? { ...p, stock: p.stock - diff } : p
        ),
        notification: { type: "update", message: "Cart updated!" },
      };
    }

    case SHOW_NOTIFICATION:
      return { ...state, notification: action.payload };

    case HIDE_NOTIFICATION:
      return { ...state, notification: { type: null, message: null } };

    default:
      return state;
  }
};

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
