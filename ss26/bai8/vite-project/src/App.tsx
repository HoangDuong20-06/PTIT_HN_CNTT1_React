import { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Loading from "./components/Loading";

const LazyLoadComp = lazy(() => import("./components/LazyLoadComp"));

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Trang chủ</Link>
        <Link to="/lazy">Lazy Load</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 className="p-4">Trang chủ</h1>} />
        <Route
          path="/lazy"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLoadComp />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;