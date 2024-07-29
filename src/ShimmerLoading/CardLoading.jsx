import React from "react";
import { ShimmerThumbnail} from "react-shimmer-effects";
const CardLoading = () => {

  const renderShimmerThumbnails = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <ShimmerThumbnail key={index} height={200} rounded />
    ));
  };
  return (
    <>
      <div className="px-6">
        <h1 className="text-zinc-700 font-medium">Newest product added</h1>
        <div
          className=" mt-2 
             grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2"
        >
          {renderShimmerThumbnails(16)}
        </div>
      </div>
      <div className="px-6  mt-6">
        <h1 className="text-zinc-700 font-medium">Featured for you</h1>
        <div
          className="mt-2 
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2"
        >
           {renderShimmerThumbnails(32)}
        </div>
      </div>
    </>
  );
};

export default CardLoading;
