import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct } from './ProductApi';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProduct',
  async () => {
    const response = await fetchAllProduct();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;  
        // Corrected assignment
        // state.products assignment: here i  should use state.products = action.payload instead of state.products += action.payload because += will concatenate the array as a string, which is not the desired behavior.
      });
  },
});

// Selector function to get all products from the state
export const selectAllProducts = (state) => state.product.products;

// Export the reducer
export default productSlice.reducer;
