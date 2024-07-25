import {createSlice} from "@reduxjs/toolkit"
import { message } from "antd";

// get cart item from local Storage
const initialState = localStorage.getItem('cartItemsSuntel')
  ? JSON.parse(localStorage.getItem('cartItemsSuntel'))
  : [];


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:initialState,
        cartTotalAmmount: 0,
        cartTotalQuantity: 0,
    },
    reducers :{
        // Add To Cart
        addToCart:(state, action)=>{
           const  product=action.payload;
           const  findIndex=state.items.findIndex((item)=>item.key===product.key);
           console.log("find index",findIndex)
           // if item allreday present then show the message
             if(findIndex>=0){
               message.success('product allready present in cart')
             }
             else{
            // if item is not present then add product in redux 
              state.items.push(product);
              message.success("Product added")
             }
         // set product in local storage
            localStorage.setItem("cartItemsSuntel", JSON.stringify(state.items))
        },
       // add multiple to cart
        addMultipleToCart: (state, action) => {
          const products = action.payload;
          products.forEach(product => {
            const existingItem = state.items.find(i => i.key === product.key);
            if (!existingItem) {
              state.items.push(product);
              message.success("products added")
            }
          });
        },

        // update quantity
        updateQuantity:(state, action)=>{

          const { key, quantity } = action.payload;
          const  findIndex=state.items.findIndex((item)=>item.key===key);


          if(findIndex>=0){
            //console.log("findIndex", product);
            //state.items[findIndex].quantity+=product.quantity
            state.items[findIndex].quantity = quantity;

            message.success(`You've changed 'Test Product -${state.items[findIndex]?.region}' QUANTITY to
            '${state.items[findIndex].quantity}'`);
              // set product in local storage
              localStorage.setItem("cartItemsSuntel", JSON.stringify(state.items))
          }
        
        },


        // increse quantity 
        increseQuantity:(state, action)=>{
           const id=action.payload;
           const findIndex=state.items.findIndex((item)=>item.key===id);
           if(findIndex>=0){
            state.items[findIndex].quantity+=1;
            message.success(`You've changed 'Test Product - ${state.items[findIndex]?.region}' QUANTITY to
            '${state.items[findIndex].quantity}'`);
           }
        },

         // decrese quantity
        decreseQuantity:(state, action)=>{
          const id=action.payload;
           const findIndex=state.items.findIndex((item)=>item.key===id);
           if(findIndex>=0){
            state.items[findIndex].quantity-=1;
            message.success(`You've changed 'Test Product - ${state.items[findIndex]?.region}' QUANTITY to
            '${state.items[findIndex].quantity}'`);
           }
        },
        // remove cart
        removeCartItem:(state, action)=>{
          const id = action.payload;
          const newItems = state.items.filter((item) => item.key !== id);
          state.items = newItems;
          localStorage.setItem('cartItemsSuntel', JSON.stringify(state.items));
          message.success(`item remove from cart`)
        },

        clearCart: (state, action)=>{
          state.items = [];
          localStorage.setItem('cartItemsSuntel', JSON.stringify(state.items));
          message.success(`Cart Clear 👏 `);
        },

        calculateSubTotal: (state, action) => {
          const cartItem = action.payload;
          if (cartItem?.length === 0) {
            state.cartTotalAmmount = 0;
            state.cartTotalQuantity = 0;
          } else {
            const priceArray = [];
            cartItem?.map((item) => {
              const price = item?.price 
              const totalAmmount = price * item?.quantity;
              return priceArray.push(totalAmmount);
            });
            const subTotal = priceArray.reduce((a, b) => {
              return a + b;
            });
    
            const allQuantity = [];
            cartItem?.map((item) => {
              return allQuantity.push(item?.quantity);
            });
            const totalQuantity = allQuantity.reduce((a, b) => {
              return a + b;
            });
            state.cartTotalAmmount = subTotal;
            state.cartTotalQuantity = totalQuantity;
          }
        },




    }
});

export const { addToCart, updateQuantity, 
  addMultipleToCart, decreseQuantity, increseQuantity, removeCartItem, 
  clearCart, 
  calculateSubTotal} = cartSlice.actions;
export default cartSlice.reducer;