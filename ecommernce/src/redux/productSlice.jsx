import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[],
    searchTerm:"",
    filteredData:[]
}

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts(state,action){
            console.log("s",state.products,"a",action.payload)
            state.products=action.payload
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
            state.filteredData = state.products.filter(product =>
              product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            );
            console.log('Filtered Data:', state.filteredData);
          }
          
        
    },

})



export const {setProducts,setSearchTerm}=productSlice.actions;
export default productSlice.reducer