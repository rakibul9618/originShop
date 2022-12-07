import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addToCert = createAsyncThunk(
  'product/productSlice',
  async ({ id, dispatch }, thunkAPI) => {
    const { data } = await axios.get(`/api/products/${id}`);
    // thunkAPI.dispatch({
    //   type: 'Cart_AddItem',
    // });
    return data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },

  reducers: {
    // addToCert(state , action){
    //   const tempProduct = { ...action.payload  };
    //   state.cartItems.push(tempProduct);
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(addToCert.pending, (state) => {})
      .addCase(addToCert.fulfilled, (state, action) => {
        const value = action.payload;
        state.cartItems = state.cartItems.concat(value);
      })
      .addCase(addToCert.rejected, (state, action) => {});
  },
});

// ! code change here
// * export default cartSlice;

export default cartSlice.reducer;
