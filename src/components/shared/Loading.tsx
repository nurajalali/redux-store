import React from "react";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <CircleLoader color="red" aria-label="Loading Spinner" size={50} />
    </div>
  );
};

export default Loading;
