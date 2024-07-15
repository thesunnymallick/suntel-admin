
import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "../feature/addLoginSlice";
import menusReducer from "../feature/menuHandelSlice";
import productsSlice from "../feature/productsSlice";
const store =configureStore({
    reducer :{
     login:loginReducer,
     menus:menusReducer,
     products:productsSlice,
    }
})

export default store;