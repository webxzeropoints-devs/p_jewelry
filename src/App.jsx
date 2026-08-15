import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Collections from "./pages/products/Collections";
import Product from "./pages/products/Product";
import ProductDetails from "./pages/products/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Collections Page */}
        <Route
          path="/collections"
          element={<Collections />}
        />

        {/* Products Page */}
        <Route
          path="/products/:collectionType"
          element={<Product />}
        />

        {/* Product Details Page */}
        <Route
          path="/product/:productId"
          element={<ProductDetails />}
        />

        {/* Root */}
        <Route
          path="/"
          element={
            <Navigate
              to="/collections"
              replace
            />
          }
        />

        {/* Invalid URL */}
        <Route
          path="*"
          element={
            <Navigate
              to="/collections"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;