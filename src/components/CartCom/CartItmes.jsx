import React from "react";
import { useDispatch } from "react-redux";
import netflixImge from "../../assets/netflixBg.jpg";
import {
  decreseQuantity,
  increseQuantity,
  removeCartItem,
} from "../../feature/cartSlice";
const CartItmes = ({ item }) => {
  
  const dispatch = useDispatch();
  return (
    <div className="border-b-[1px] border-b-zinc-200 py-2 px-2 ">
      <div className=" flex gap-2 ">
        <img
          className="w-36 h-32 rounded-md object-cover"
          src={netflixImge}
          alt="netflixImage"
          // effect="blur"
        />

        <div className="flex-1 flex gap-1 flex-col">
          <h2 className="text-lg text-zinc-800 font-semibold">
            {`Test Product - ${item?.region}`}
          </h2>
          <span className="text-sm text-zinc-600">
            {/* {textSize(item?.description?.split('|')[1] || item?.description, 100)} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-zinc-800">{`${
              item?.price * item?.quantity
            }`}</span>
            <span className="text-base text-zinc-700 font-normal">
              {`(${item?.price} X ${item?.quantity})`}
            </span>
          </div>
          <div className="w-full flex items-center justify-between py-1">
            <div className="flex">
              <button
                disabled={item.quantity === 1 ? true : false}
                onClick={() => dispatch(decreseQuantity(item.key))}
                className={`${
                  item.quantity === 1 && "opacity-70 cursor-not-allowed"
                } w-9 h-7 rounded-md
            bg-blue-700 text-white text-xl flex items-center justify-center transition-all hover:bg-blue-800`}
              >
                -
              </button>
              <span className="w-7 h-7 flex justify-center text-lg text-zinc-800">
                {item.quantity}
              </span>
              <button
                disabled={item.quantity === item.inStock}
                onClick={() => dispatch(increseQuantity(item.key))}
                className={`${
                  item.quantity === item.inStock &&
                  "opacity-70 cursor-not-allowed"
                }
              w-9 h-7 rounded-md
              bg-blue-700 text-white text-xl flex items-center justify-center transition-all hover:bg-blue-600`}
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={() => dispatch(removeCartItem(item?.key))}
                className="w-20 h-8 bg-blue-500 text-white text-base rounded-md hover:bg-blue-600 transition-all"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItmes;
