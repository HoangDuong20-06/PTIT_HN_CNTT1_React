import "./App.css";

export default function App() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <p className="mb-2 italic">Hình 1.1. Các phần tử nằm bên trái</p>
        <div className="flex justify-start gap-2 border p-2 w-full">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">01</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">02</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">03</button>
        </div>
      </div>
      <div>
        <p className="mb-2 italic">Hình 1.2. Các phần tử nằm bên phải</p>
        <div className="flex justify-end gap-2 border p-2 w-full">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">01</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">02</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">03</button>
        </div>
      </div>
      <div>
        <p className="mb-2 italic">Hình 1.3. Các phần tử nằm ở giữa</p>
        <div className="flex justify-center gap-2 border p-2 w-full">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">01</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">02</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">03</button>
        </div>
      </div>
      <div>
        <p className="mb-2 italic">Hình 1.4. Các phần tử giãn ra hai bên</p>
        <div className="flex justify-between border p-2 w-full">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">01</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">02</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">03</button>
        </div>
      </div>
      <div>
        <p className="mb-2 italic">Hình 1.5. Các phần tử giãn đều 2 bên</p>
        <div className="flex justify-around border p-2 w-full">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">01</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">02</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">03</button>
        </div>
      </div>
      <div>
        <p className="mb-2 italic">Hình 1.6. Các phần tử giữa đều</p>
        <div className="flex justify-evenly border p-2 w-full">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">01</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">02</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">03</button>
        </div>
      </div>
    </div>
  );
}
