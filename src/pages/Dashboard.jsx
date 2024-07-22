import React, { useEffect, useState} from "react";
import Sidebar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import CardItem from "../components/dashboardCom/CardItem";
// import { data as cardData, data2 as cardData2 } from "../utils/cardData";
import netflixImge from "../assets/netflixBg.jpg";
import CardLoading from "../ShimmerLoading/CardLoading";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../feature/productsSlice";
import axios from "axios";
const Dashboard = () => {
  const dispatch=useDispatch();
  const {products, isLoading}=useSelector((state)=>state.products);
  const [sproducts, setSProducts] = useState(JSON.parse(localStorage.getItem('Sproducts')) || []);
  const [eTag, setETag] = useState(localStorage.getItem('eTag') || null);
  useEffect(()=>{
    if(products.length===0){
      dispatch(fetchAllProducts())
    }
   
  }, [dispatch, products])





  useEffect(() => {
    // Function to fetch products with GET request
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://backend.suntelrecharge.com/api/v2/web/product/listings?filter=frontpage');
        if (response.status === 200) {
          setSProducts(response.data);
          localStorage.setItem('products', JSON.stringify(response.data));
          const etagHeader = response.headers['etag'];
          if (etagHeader) {
            setETag(etagHeader);
            localStorage.setItem('eTag', etagHeader);
          }
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Function to check E-Tag with HEAD request
    const checkETag = async () => {
      try {
        const response = await axios.head('https://backend.suntelrecharge.com/api/v2/web/product/listings?filter=frontpage');
        const etagHeader = response.headers['etag'];
        if (etagHeader && etagHeader !== eTag) {
          // E-Tag has changed, fetch the products again
          fetchProducts();
        }
      } catch (error) {
        console.error('Error checking E-Tag:', error);
      }
    };

    // Initial check to see if we need to fetch products
    if (!eTag || products.length === 0) {
      fetchProducts();
    } else {
      checkETag();
    }

    // Set interval to check E-Tag every 5 minutes (300000 ms)
    const interval = setInterval(() => {
      checkETag();
    }, 300000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [eTag, sproducts]);


  return (
    <section className="flex   ">
      <Sidebar />
      <div className="flex-1 bg-zinc-50">
        <NavBar />

        {isLoading !== true ? (
          <>
            <div className="px-6">
              <h1 className="text-zinc-700 font-medium">
                Newest product added
              </h1>

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
      </div>
    </section>
  );
};

export default Dashboard;
