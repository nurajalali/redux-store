import React from "react";
import { Link } from "react-router-dom";

const ProductCrad = ({ product }) => {
  const { image, title, price, category, id } = product;

  return (
    <div className="rounded-xl bg-gray-300 shadow-lg flex flex-col justify-between overflow-hidden">
      <img className="w-full h-64" src={image} />
      <div className="my-2 px-3">
        <p className="mt-2">{title}</p>
        <p
          className="mt-2 text-black
        "
        >
          <span className="text-blue-700 font-semibold">category:</span>
          {category}
        </p>
        <p
          className="mt-2 text-black
        "
        >
          <span className="text-blue-700 font-semibold">price:</span>
          {price}
        </p>
        <div className="text-center text-emerald-700 font-extrabold hover:text-black">
          <Link to={`/products/${id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCrad;
