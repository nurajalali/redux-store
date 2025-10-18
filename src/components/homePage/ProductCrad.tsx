import React from "react";

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
      </div>
    </div>
  );
};

export default ProductCrad;
