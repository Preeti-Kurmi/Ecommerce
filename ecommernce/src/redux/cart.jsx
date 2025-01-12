import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice:0

};

const cartSlice = createSlice({
  name: "carts",
  
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      // Check if item already exists in the cart
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Update quantity and total price for the existing item
        existingItem.quantity++;
        existingItem.totalPrice += newItem.Price;
      } else {
        // Add new item to the cart
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          Price: newItem.Price,
          quantity: 1,
          totalPrice: newItem.Price,
          image: newItem.image,
        });
      }
    
      // Update total cart price and quantity
      state.totalPrice += newItem.Price;
      state.totalQuantity++;
    },

  removeToCart(state,action){
    const id=action.payload;
   
    const findItem=state.products.find((item)=>item.id===id)
    if(findItem){
      state.totalPrice-=findItem.totalPrice;
      state.totalQuantity-=findItem.quantity;
      state.products=state.products.filter(item=>item.id!==id)
    }
  },
  increaseQuantity(state,action){
    const id=action.payload;
    console.log("idd",id)
    const findItem=state.products.find((item)=>item.id===id)
    console.log("item",findItem)
    if(findItem){
   
      state.totalPrice+=findItem.Price;
     findItem.quantity++;
     state.totalQuantity++;
   
    }
  },
  decreaseQuantity(state,action){
    const id=action.payload;
    console.log("idd",id)
    const findItem=state.products.find((item)=>item.id===id)
    console.log("item",findItem)
    if(findItem && findItem.quantity>0){
   
      state.totalPrice-=findItem.Price;
     findItem.quantity--;
     state.totalQuantity--;
   
    }
  }



  },







});

export const { addToCart,removeToCart,increaseQuantity,decreaseQuantity} = cartSlice.actions; // Correct export
export default cartSlice.reducer;
