import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import apiService from "../utils/apiService"


// store in local storage
 const allProducts= localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):{
    isLoading:false,
    products: [],
    isError:false
 } 
// api call
export const fetchAllProducts=createAsyncThunk("products/fetchAllProducts", 
    async(_, thunkAPI)=>{
        try {
            const {status, data} = await apiService.get(`/api/v1/seller/products`);
                if(status===200){
                    return data
                }
      
          } catch (error) {
            console.log("Error", error)
            return thunkAPI.rejectWithValue(error.message); // Handles the rejection
          }
})

const productSlice=createSlice({
    name:"products",
    initialState : allProducts,
    extraReducers :(builder)=>{
    
    //when api call pending
    builder.addCase(fetchAllProducts.pending, (state, action)=>{
     state.isLoading=true
    })
    
    // when api call success
    builder.addCase(fetchAllProducts.fulfilled, (state, action)=>{
     state.isLoading=false;
     state.products=action.payload;
     localStorage.setItem("products", JSON.stringify(state));
    })

    // when api reject
    builder.addCase(fetchAllProducts.rejected, (state, action)=>{
        state.isLoading=false;
        console.log("Failed! Fetch products", action.error);
    })

   }

})

export default productSlice.reducer;