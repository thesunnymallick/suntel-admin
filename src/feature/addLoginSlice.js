import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const authInfo = localStorage.getItem("loginInfo")
  ? JSON.parse(localStorage.getItem("loginInfo"))
  : {
      authToken: null,
      isAuth: false,
      authInfo: null,
      walletBalance:"00.00" || null,
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

    addWalletBalance:(state, action)=>{
      const wallet=action.payload;
      const filterWallet = wallet?.find(
      (wallet) => wallet.currency_name === "EUR"
      );

      if(filterWallet){
        state.authInfo.walletBalance=filterWallet;
        localStorage.setItem("loginInfo", JSON.stringify(state.authInfo))
      }

    },


  },
});

export const { addLogin, addLogout, addWalletBalance } = addLoginSlice.actions;
export default addLoginSlice.reducer;
