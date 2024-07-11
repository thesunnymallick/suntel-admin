
import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "../feature/addLoginSlice"
import menusReducer from "../feature/menuHandelSlice"
const store =configureStore({
    reducer :{
     login:loginReducer,
     menus:menusReducer
    }
})

export default store;