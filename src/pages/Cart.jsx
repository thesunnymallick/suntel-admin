import React from "react";
import CartItmes from "../components/CartCom/CartItmes";
import OrderSummary from "../components/CartCom/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import Steper from "../components/CartCom/Steper";
import { clearCart } from "../feature/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch =useDispatch();
  return (
    <section className="flex gap-0  bg-zinc-50">
      <Sidebar />
      <div className="flex-1  ">
        <NavBar />
        <Steper/>

        <div className="px-6 py-4 mt-[7%]">
          {items.length !== 0 ? (
            <div className="w-full flex flex-col gap-6 lg:flex-row">
              <div className="basis-[60%]">
                <div className="flex items-center py-2 gap-1">
                  <h1 className="text-xl text-zinc-800 font-semibold">
                    Cart Itmes
                  </h1>
                  <span className="text-lg text-zinc-700 font-medium ">
                    ({items?.length})
                  </span>
                </div>
                <div className="itemCard flex flex-col  gap-4 px-2 py-3 ">
                  {items.map((item) => {
                    return <CartItmes key={item?.key} item={item} />;
                  })}
                </div>

                <div>
                  <button
                   onClick={()=>dispatch(clearCart())}
                    className="w-24 h-8 bg-blue-700  text-white text-base rounded-md hover:bg-blue-800 mt-4"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              <div className="basis-[40%]">
                <OrderSummary items={items} />
              </div>
            </div>
          ) : (
            <h2>Not found</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
