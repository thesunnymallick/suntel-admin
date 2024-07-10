
import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "../feature/addLoginSlice"

const store =configureStore({
    reducer :{
     login:loginReducer,
    }
})

export default store;