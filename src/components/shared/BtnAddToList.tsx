import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addToList, removeFromList } from "../../features/list/ListSlice";
import toast from "react-hot-toast";
import { isInList } from "../../functions/functions";
import type { RootState } from "../../app/store";
import type { Product } from "../../types/product";

type ButtonsProps = {
  data: Product;
};

const BtnAddToList = ({ data }: ButtonsProps) => {
  const list = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();

  const addToListHandler = () => {
    dispatch(addToList(data));
    toast.success("Add To List");
  };

  const removeFromListHandler = () => {
    dispatch(removeFromList(data));
    toast.success("Remove From List");
  };

  return (
    <div className="w-full flex items-center justify-center my-4">
      {!isInList(list, data?.id) ? (
        <button onClick={addToListHandler} className="px-2 py-1 rounded-lg">
          <CiHeart size={25} />
        </button>
      ) : (
        <button
          onClick={removeFromListHandler}
          className="px-2 py-1 rounded-lg"
        >
          <IoHeart size={25} color="red" />
        </button>
      )}
    </div>
  );
};

export default BtnAddToList;
