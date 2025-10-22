import type { RootState } from "../../app/store";
import {
  addToCart,
  removeToCart,
  increase,
  decrease,
} from "../../features/cart/cartSlice";
import { counter, isInCart } from "../../functions/functions";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ data }) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const removeToCartHandler = () => {
    dispatch(removeToCart(data));
  };

  const decreaseHandler = () => {
    dispatch(decrease(data));
  };

  const increaseHandler = () => {
    dispatch(increase(data));
  };

  const addToCartHandler = () => {
    dispatch(addToCart(data));
  };

  return (
    <div className="w-full flex items-center justify-center relative mt-2 p-2">
      {counter(cart, data.id) === 1 && (
        <button
          onClick={removeToCartHandler}
          className="flex items-center justify-center bg-red-500 w-1/2 py-2 rounded-lg border border-black"
        >
          <FaTrash size={15} />
        </button>
      )}
      {counter(cart, data.id) > 0 && (
        <span className="w-[40px] h-[40px] absolute rounded-full bg-yellow-500 border border-black flex items-center justify-center">
          {counter(cart, data.id)}
        </span>
      )}
      {counter(cart, data.id) > 1 && (
        <button
          onClick={decreaseHandler}
          className="flex items-center justify-center bg-orange-500 w-1/2 py-2 rounded-lg border border-black"
        >
          <FaMinus size={15} />
        </button>
      )}
      {isInCart(cart, data.id) ? (
        <button
          onClick={increaseHandler}
          className="flex justify-center bg-green-500 w-1/2 py-2 rounded-lg border border-black"
        >
          <FaPlus size={15} />
        </button>
      ) : (
        <button
          onClick={addToCartHandler}
          className="bg-green-500 w-full py-2 rounded-lg border border-black"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Buttons;
