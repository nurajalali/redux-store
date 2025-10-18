import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../features/getDetails/getDetails";
import { useParams } from "react-router-dom";
import Loading from "../shared/Loading";
import DetailsCard from "./DetailsCard";

const DetailsPage = () => {
  const { loading, productDetails, error } = useSelector(
    (state) => state?.productDetails
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(Number(id)));
  }, [id]);

  return (
    <div className="w-full min-h-screen px-2 my-4">
      {loading && <Loading />}
      {error && (
        <h1 className="text-red-700 text-2xl text-center my-10 h-screen">
          {error}
        </h1>
      )}
      {productDetails && <DetailsCard details={productDetails} />}
    </div>
  );
};

export default DetailsPage;
