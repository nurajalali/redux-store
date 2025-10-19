import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuFolderHeart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { count } = useSelector((state) => state.cart);
  return (
    <div className="w-full p-3 bg-blue-950 rounded-lg mt-11">
      <ul className="flex items-center">
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4 flex items-center justify-center gap-2 relative">
          <Link to="/cart">
            <AiOutlineShoppingCart size={25} />
          </Link>
          <span className=" w-[20px] h-[20px] text-sm rounded-full bg-red-600 border border-white flex items-start justify-center top-[-10px] right-[-10px]">
            {count}
          </span>
        </li>
        <li className="mx-4 flex items-center justify-center gap-2 cursor-pointer">
          <LuFolderHeart size={25} color="#fff" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
