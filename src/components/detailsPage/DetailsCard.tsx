import React from "react";

const DetailsCard = ({ details }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-5">
      <div className="order-2 md:order-1 w-full md:w-[65%] border border-blue-700 rounded-xl p-10 ">
        <p className="text-yellow-500 text-xl text-justify border border-gray-500 rounded-xl p-3 my-3">
          Title : <span className="text-blue-700">{details.title}</span>
        </p>
        <p className="text-yellow-500 text-xl text-justify border border-gray-500 rounded-xl p-3 my-3">
          Category : <span className="text-blue-700">{details.category}</span>
        </p>
        <p className="text-yellow-500 text-xl text-justify border border-gray-500 rounded-xl p-3 my-3">
          Description :{" "}
          <span className="text-blue-700">{details.description}</span>
        </p>
        <p className="text-yellow-500 text-xl text-justify border border-gray-500 rounded-xl p-3 my-3">
          Price : <span className="text-blue-700">{details.price}</span>
        </p>
      </div>
      <div className="order-1 md:order-2 w-full md:w-[35%] rounded-xl overflow-hidden flex items-center">
        <img src={details?.image} className="w-full h-96 rounded-2xl" />
      </div>
    </div>
  );
};

export default DetailsCard;
