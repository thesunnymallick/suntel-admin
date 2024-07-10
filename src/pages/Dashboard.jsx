import React, { useEffect, useState } from "react";
import Sidebar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import CardItem from "../components/dashboardCom/CardItem";
// import { data as cardData, data2 as cardData2 } from "../utils/cardData";
import apiService from "../utils/apiService";
import netflixImge from "../assets/netflixBg.jpg";
import CardLoading from "../ShimmerLoading/CardLoading";
import { message } from "antd";
const Dashboard = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data, status } = await apiService.get(`/api/v1/seller/products`);
      if (status === 200) {
        setAllProducts(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      message.error("Products not found");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="flex gap-6 bg-zinc-50">
      <Sidebar />
      <div className="flex-1 ">
        <NavBar />

        {loading !== true ? (
          <>
            <div className="px-6">
              <h1 className="text-zinc-700 font-medium">
                Newest product added
              </h1>

              <div
                className=" mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2"
              >
                {allProducts?.shops?.map((item, index) => {
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
             grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2"
              >
                {allProducts?.products?.map((item) => {
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
      </div>
    </section>
  );
};

export default Dashboard;
