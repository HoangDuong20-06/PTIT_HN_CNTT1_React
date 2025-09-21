import ListProduct from "./components/ListProduct";
import YourCart from "./components/YourCart";
import Notification from "./components/Notification";

export default function App() {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex gap-6">
        <ListProduct />
        <div className="flex flex-col items-center">
          <YourCart />
          <Notification />
        </div>
      </div>
    </div>
  );
}
