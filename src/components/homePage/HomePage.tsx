import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/getAllProducts/getAllProductsSlice";
import Loading from "../shared/Loading";
import type { AppDispatch, RootState } from "../../app/store";
import ProductCard from "./ProductCard";

const HomePage = () => {
  const { loading, products, error } = useSelector(
    (state: RootState) => state?.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="w-full my-10 px-4">
      <h1
        className="pb-4
        text-3xl
        text-center
        text-blue-500
        font-extrabold
        border-b-4 border-blue-700"
      >
        Products
      </h1>
      {loading && (
        <div className="flex justify-center items-center my-10">
          <Loading />
        </div>
      )}
      {error && (
        <h2 className="text-red-600 text-xl text-center mt-10">{error}</h2>
      )}
      <div
        className="w-full grid    grid-cols-1  sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4  gap-6 pt-6 "
      >
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
