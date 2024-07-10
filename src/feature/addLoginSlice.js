import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const authInfo = localStorage.getItem("loginInfo")
  ? JSON.parse(localStorage.getItem("loginInfo"))
  : {
      authToken: null,
      isAuth: false,
      authInfo: null,
    };

    // login slice 
export const addLoginSlice = createSlice({
  name: "loginInfo",
  initialState: { authInfo },
  reducers: {
    addLogin: (state, action) => {
      const user = action.payload;
      if (user) {
        state.authInfo.authInfo = user.customer;
        state.authInfo.isAuth = true;
        state.authInfo.authToken = user.token;
        localStorage.setItem("loginInfo", JSON.stringify(state.authInfo))
      }

    },

    addLogout: (state, action) => {
      state.authInfo.authInfo=null;
      state.authInfo.isAuth=false;
      state.authInfo.authToken=null;
      Cookies.remove('token'); 
    },
  },
});

export const { addLogin, addLogout } = addLoginSlice.actions;
export default addLoginSlice.reducer;
