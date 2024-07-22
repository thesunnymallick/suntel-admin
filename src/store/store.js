
import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "../feature/addLoginSlice";
import menusReducer from "../feature/menuHandelSlice";
import productsSlice from "../feature/productsSlice";
import cartReducer from "../feature/cartSlice"
const store =configureStore({
    reducer :{
     login:loginReducer,
     menus:menusReducer,
     products:productsSlice,
     cart:cartReducer,
    }
})

export default store;