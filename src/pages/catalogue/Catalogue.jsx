import React, { useEffect } from "react";
import CardItem from "../../components/dashboardCom/CardItem";
import netflixImge from "../../assets/netflixBg.jpg";
import CardLoading from "../../ShimmerLoading/CardLoading";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../feature/productsSlice";
import CatalogueHeader from "../../layouts/CatalogueHeader";
const General = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, products]);

  return (
    <>
      <CatalogueHeader />

      {isLoading !== true ? (
        <>
          <div className="px-6 mt-4">
            <h1 className="text-zinc-700 font-medium">Newest product added</h1>

            <div
              className=" mt-2 
              grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-2"
            >
              {products?.shops?.map((item, index) => {
                return (
                  <CardItem
                    key={item?.id}
                    name={item?.name}
                    img={netflixImge}
                    para={
                      item?.description ||
                      "Download and play thousand of your favorite game"
                    }
                  />
                );
              })}
            </div>
          </div>

          <div className="px-6  mt-6">
            <h1 className="text-zinc-700 font-medium">Featured for you</h1>

            <div
              className=" mt-2 
             grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-2"
            >
              {products?.products?.map((item) => {
                return (
                  <CardItem
                    key={item?.id}
                    name={item?.name}
                    img={netflixImge}
                    para={
                      item?.description ||
                      "Download and play thousand of your favorite game"
                    }
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <CardLoading />
      )}
    </>
  );
};

export default General;
