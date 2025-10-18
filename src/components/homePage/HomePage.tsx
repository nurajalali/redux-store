import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/getAllProducts/getAllProductsSlice";
import Loading from "../shared/Loading";
import ProductCrad from "./ProductCrad";

const HomePage = () => {
  const { loading, products, error } = useSelector((state) => state?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="w-full my-10">
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
      {loading ? (
        <h1>
          <Loading />
        </h1>
      ) : null}
      {error ? (
        <h2 className="text-red-600 text-xl text-center mt-10">{error}</h2>
      ) : null}
      <div className="w-full grid grid-cols-4 gap-8 pt-5 px-2">
        {products.length
          ? products.map((product) => (
              <ProductCrad key={product?.id} product={product} />
            ))
          : null}
      </div>
    </div>
  );
};

export default HomePage;
