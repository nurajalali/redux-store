import Buttons from "./Buttons";
import BtnAddToList from "./BtnAddToList";
import type { Product } from "../../types/product";

type CartItemProps = {
  item: Product;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between border border-blue-500 rounded-xl my-4 p-5 gap-5 px-4 md:px-8">
      <img
        className="w-full md:w-[240px] md:h-[250px] rounded-lg"
        src={item.image}
      />
      <div className="w-full md:w-[50%]">
        <p className="text-yellow-500 text-lg md:text-xl text-justify rounded-xl p-3 my-3">
          Title: <span className="text-blue-700">{item.title}</span>
        </p>
        <p className="text-yellow-500 text-lg md:text-xl text-justify rounded-xl p-3 my-3">
          Category: <span className="text-blue-700">{item.category}</span>
        </p>
        <p className="text-yellow-500  text-lg md:text-xl text-justify rounded-xl p-3 my-3">
          Price: <span className="text-blue-700">{item.price}</span>$
        </p>
      </div>
      <div className="w-full md:w-[25%] flex flex-col items-center justify-center gap-3">
        <Buttons data={item} />
        <BtnAddToList data={item} />
      </div>
    </div>
  );
};

export default CartItem;
