import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Collections from "./pages/products/Collections";
import Product from "./pages/products/Product";
import ProductDetails from "./pages/products/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/collections"
              replace
            />
          }
        />

        <Route
          path="/collections"
          element={<Collections />}
        />

        <Route
          path="/products/:collectionType"
          element={<Product />}
        />

        <Route
          path="/product/:productId"
          element={<ProductDetails />}
        />

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

      <Footer />
    </BrowserRouter>
  );
}

export default App;