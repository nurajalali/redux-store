import { useState } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import DetailsPage from "./components/detailsPage/DetailsPage";
import CartPage from "./components/cart/CartPage";
import { Toaster } from "react-hot-toast";
import List from "./components/shared/List";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-2 ">
      {isOpen ? <List open={setIsOpen} /> : null}
      <Header open={setIsOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
