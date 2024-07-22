import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateSubTotal } from '../../feature/cartSlice';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { cartTotalAmmount, cartTotalQuantity, items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateSubTotal(items));
  }, [items, dispatch]);

  return (
      <div className="w-[80%] h-96 shadow-md rounded-md bg-white px-5 py-3 sticky left-[10%] top-[25%]">
      <h1 className="text-2xl font-medium border-b-[1px]  text-zinc-800 py-2  border-b-zinc-300">
        Order Summary
      </h1>
      <div className="flex flex-col gap-3 py-3 border-b-[1px] border-b-zinc-300">
        <div className="flex justify-between">
          <span className="text-lg font-medium text-zinc-800">
          Price({cartTotalQuantity})
            </span>
          <span className="text-lg font-bold text-zinc-800">
            {parseInt(cartTotalAmmount).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg font-medium text-zinc-800">Discount (0%)</span>
          <span className="text-lg font-bold text-zinc-800">
            {/* ₹-{parseFloat(discount).toFixed(2)} */} 0.00
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg font-medium text-zinc-800">Delivery charges (0%)</span>
          <span className="text-lg font-bold text-zinc-800">
            {/* ₹+{parseFloat(deliveryCharge).toFixed(2)} */} 0.00
          </span>
        </div>

        <p className="text-sm text-zinc-600 ">
          {' '}
          You'll save  0%
          {/* ₹{parseFloat(discount).toFixed(2)}  */}
          on this order 🎉
        </p>
      </div>
      <div className="flex justify-between py-4 border-b-[1px] border-b-zinc-300">
        <span className="text-xl text-zinc-800 font-semibold">Total Amount</span>
        <span className="text-xl text-blue-500 font-semibold">
          {parseFloat(cartTotalAmmount ).toFixed(2)}
        
        </span>
      </div>
      <button className="w-full my-4 h-12 text-xl bg-blue-500  bg-gradient-to-t from-blue-950 text-white font-semibold uppercase rounded-md hover:bg-blue-600 transition-all ">
        Place order
      </button>
      </div>
  )
}

export default OrderSummary
