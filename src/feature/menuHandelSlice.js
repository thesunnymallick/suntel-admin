import { createSlice } from "@reduxjs/toolkit"

// sidebar menu open 
export const menuHandelSlice = createSlice({
    name: "menus",
    initialState: { sidebarMobileMenu:false },
    reducers: {
      openSidebarMenu: (state, action) => {
        state.sidebarMobileMenu=true;
  
      },
  
      closeSidebarMenu: (state, action) => {
        state.sidebarMobileMenu=false;
      },
    },
  });
  
  export const { openSidebarMenu, closeSidebarMenu } = menuHandelSlice.actions;
  export default menuHandelSlice.reducer;