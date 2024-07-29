import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import netflixImge from "../../assets/netflixBg.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import {  InputNumber} from 'antd';
import { RiDeleteBin5Line } from "react-icons/ri";
import { debounce } from 'lodash';
import { calculateSubTotal, decreseQuantity, increseQuantity, removeCartItem, updateQuantity } from '../../feature/cartSlice';
import { MdKeyboardBackspace } from "react-icons/md";

const CartModal = ({setOpenCart}) => {
    const {cartTotalAmmount, cartTotalQuantity, items } = useSelector((state) => state.cart);
    const dispatch=useDispatch()
    // Calculate sub total 
    useEffect(() => {
      dispatch(calculateSubTotal(items));
    }, [items, dispatch]);
  return (
    <div className='px-3 py-4 relative h-screen overflow-x-hidden'>
       <div className='flex justify-between items-center  py-3 px-2 sticky -top-5 bg-white z-50'>
        <h2 className='text-xl text-zinc-800 font-semibold flex items-center gap-1'>
           <span onClick={()=>setOpenCart(false)} className='text-3xl mr-4 cursor-pointer'>< MdKeyboardBackspace/></span>
           <span>My Cart </span>  
           <span className='text-base'>({items.length})  </span>
        </h2>
        <Link to="/cart" className='text-base font-semibold text-blue-700 hover:text-blue-800'>View Cart</Link>
       </div>
       
       <div className='shadow-sm rounded-md bg-white mt-2 max-h-[70vh] overflow-y-auto custom-scrollbar'>
         {
          items?.map((item)=>{
            return (
              <ProductItem key={item.key} item={item}/>
            )
          })
         }
         

       

       </div>
 
        <div className='flex  justify-end py-4  '>
          <div className='flex items-center justify-between  w-[55%] px-2'>
            <span className='text-lg text-blue-600 flex items-center  gap-1'>
              <span>Subtotal </span>
              <span className='text-base '>({cartTotalQuantity})</span>
              :</span>
            <span className='text-lg text-blue-800 font-semibold '>{`$${cartTotalAmmount}`}</span>
          </div>
         </div>
       <div className='mt-2 w-[100%] flex justify-center'>
        <button className='w-[80%] h-10 bg-blue-700 text-white text-base hover:bg-blue-800 transition-all duration-300
         font-semibold '>CheckOut</button>
       </div>
    </div>
  )
}

const ProductItem=({item})=>{
  const dispatch=useDispatch()
  const [inputValue, setInputValue] = useState(item.quantity);
  

  const debouncedUpdateQuantity = debounce ((key, value) => {

    if (value === '' || value === null) {
      // allow empty input to enable backspace
      dispatch(updateQuantity({key, quantity: 1}));
    } else if (!isNaN(value)) {
      // dispatch quantity change if its a valid number
      dispatch(updateQuantity({key, quantity: Number(value) }));
    }
    }, 300); // 300ms delay
 
    useEffect(() => {
      setInputValue(item.quantity);
    }, [item.quantity]);

    const handleQuantityChange = (value) => {
      setInputValue(value);
      debouncedUpdateQuantity(item.key, value);
    };

  return(
       <div className='relative p-2 flex gap-3 border-b-[1px] border-b-zinc-100 py-4'>
           <div className='absolute right-2 top-1'>
              <span
              onClick={() => dispatch(removeCartItem(item?.key))}
               className='text-lg text-zinc-400 hover:text-blue-500 cursor-pointer transition-all duration-300'>
                <RiDeleteBin5Line/>
              </span>
             </div>
          <div>
            <img className='w-20 h-24 rounded-md object-cover' src={netflixImge} alt="" />
          </div>

          <div className='flex-1'>
            <h2 className='text-lg text-zinc-800 font-semibold'>{`Test Product -${item.region}`}</h2>
             <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2 text-sm'>
                  <span className='text-zinc-400'>Region</span>
                  <span className='text-zinc-800 font-semibold'>{item.region}</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <span className='text-zinc-400'>In Stock</span>
                  <span className='text-zinc-800 font-semibold'>{item.inStock}</span>
                </div>
             </div>
             <div className='flex items-center gap-2 pt-1'>
                <div className=' flex items-center gap-2 rounded-sm text-xs bg-cyan-50 text-cyan-600 p-1'>
                  <TbTruckDelivery/>
                  <span>Free Shipping</span>
                </div>


             </div>
            
             <div className='flex items-center justify-between  pt-2'>
              <div className='flex items-center gap-1'>
                <button
                onClick={() => item.quantity===1? dispatch(removeCartItem(item.key)): dispatch(decreseQuantity(item.key))  }
                className='w-7 h-7 flex justify-center items-center 
                rounded-md border-[1px] border-zinc-200 text-lg text-zinc-800 font-semibold'>
                  -
                </button>
                <InputNumber
                  min={1}
                  max={item.inStock}
                  value={inputValue}
                  onChange={handleQuantityChange}
                  style={{width:"45px", height:"28px"}}
                />

                <button 
                disabled={item.quantity=== item.inStock}
                onClick={() => dispatch(increseQuantity(item.key)) }
                className={`${item.quantity === item.inStock && 'opacity-70 cursor-not-allowed' }
                w-7 h-7 flex justify-center items-center  
                rounded-md border-[1px] border-zinc-200 text-lg text-zinc-800 font-semibold`}>
                  +
                </button>
              </div>

               <h2 className='text-lg text-zinc-800 font-semibold'>{
                `$${item.quantity*item.price}`}</h2>
             </div>

           

          </div>
         </div>
  )
}
export default CartModal
