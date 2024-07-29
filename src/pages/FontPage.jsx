import { App } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { getCatalogus } from "../api/catalogusApi";
import CardLoading from "../ShimmerLoading/CardLoading";
import netflixImge from "../assets/netflixBg.jpg";
import CardItem from "../components/dashboardCom/CardItem";
// catalogue page this is testing
const FontPage = () => {
  // All products
  const [loading, setLoading] = useState(true);
  const [newestProducts, setNewestProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  // const [error, setError]=useState(null)

  console.log("Newest product", newestProducts);
  console.log("featured products", featuredProducts);

  const isMounted = useRef(false);

  // get notification from the antd
  const { notification } = App.useApp();

  // notification Function if new  product is added
  // const handleUpdateNotification = (updated) => {
  //   if (updated) {
  //     notification.info({
  //       message: 'Catalogus Updated',
  //       description: 'New product data has been loaded.',
  //       duration: 2.5
  //     });
  //   }
  // };

  // is static now
  const filterType = "frontpage";

  useEffect(() => {
    if (!isMounted.current) {
      getCatalogus(filterType)
        .then((data) => {
          // Assuming you might want to handle featured and newest separately
          if (data && "featured" in data && "newest" in data) {
            setFeaturedProducts(data.featured.brands);
            setNewestProducts(data.newest.brands);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to load products:", error);
          // setError('Failed to load products: ' + (error.message || error));
          // notification.error({
          //   message: 'Load Error',
          //   description: 'Failed to load product data.'
          // });
          setLoading(false);
        });
      isMounted.current = true;
    }
  }, [filterType, notification]);

  return (
    <>
      {loading !== true ? (
        <>
          <div className="px-6">
            <h1 className="text-zinc-700 font-medium">Newest product added</h1>

            <div
              className=" mt-2 
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-2"
            >
              {newestProducts?.map((item, index) => {
                return (
                  <CardItem
                    key={item?.uid}
                    name={item?.name}
                    img={netflixImge}
                    para={"Download and play thousand of your favorite game"}
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
              {featuredProducts?.map((item) => {
                return (
                  <CardItem
                    key={item?.uid}
                    name={item?.name}
                    img={netflixImge}
                    para={"Download and play thousand of your favorite game"}
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

export default FontPage;
