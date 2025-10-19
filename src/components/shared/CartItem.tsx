import React from "react";
import Buttons from "./Buttons";

const CartItem = ({ item }) => {
  return (
    <div className="w-full flex items-center justify-between border border-blue-500 rounded-xl my-4 p-5 gap-3">
      <img className="w-[240px] h-[250px] rounded-lg" src={item.image} />
      <div className="w-full">
        <p className="text-yellow-500 text-xl text-justify rounded-xl p-3 my-3">
          Title: <span className="text-blue-700">{item.title}</span>
        </p>
        <p className="text-yellow-500 text-xl text-justify rounded-xl p-3 my-3">
          Category: <span className="text-blue-700">{item.category}</span>
        </p>
        <p className="text-yellow-500 text-xl text-justify rounded-xl p-3 my-3">
          Price: <span className="text-blue-700">{item.price}</span>$
        </p>
      </div>
      <div className="w-full">
        <Buttons data={item} />
      </div>
    </div>
  );
};

export default CartItem;
