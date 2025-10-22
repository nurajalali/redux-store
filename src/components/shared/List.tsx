import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { IoCloseCircle } from "react-icons/io5";
import type { RootState } from "../../app/store";
import type { ListItem, Product } from "../../types/product";

type ListProps = {
  open: (value: boolean) => void;
};

const List = ({ open }: ListProps) => {
  const { list } = useSelector((state: RootState) => state.list);

  return (
    <div className="fixed w-full top-0 left-0 z-30 h-screen flex flex-col gap-6 items-center justify-center overflow-y-auto bg-gray-300">
      <div className="w-3/4 h-[500] overflow-y-auto bg-gray-100 rounded-2xl px-5 py-2">
        {list.length ? (
          list.map((item: ListItem) => <CartItem item={item} key={item.id} />)
        ) : (
          <p>List Is Empty</p>
        )}
      </div>
      <button onClick={(prev) => open(!prev)}>
        <IoCloseCircle size={50} color="red" />
      </button>
    </div>
  );
};

export default List;
