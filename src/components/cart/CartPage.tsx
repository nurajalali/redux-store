import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../shared/CartItem";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="w-full min-h-screen">
      {cart.length ? (
        <div className="flex items-center justify-center flex-col">
          {cart.map((item) => (
            <CartItem key={item?.id} item={item} />
          ))}
        </div>
      ) : (
        <h1 className="text-red-600 text-3xl text-center my-10">
          Add product{" "}
          <Link
            className="text-yellow-400 text-xl text-center my-4 border-b border-yellow-400 "
            to="/"
          >
            Home
          </Link>
        </h1>
      )}
    </div>
  );
};

export default CartPage;
