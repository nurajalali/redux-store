import React from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import DetailsPage from "./components/detailsPage/DetailsPage";
import CartPage from "./components/cart/CartPage";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
