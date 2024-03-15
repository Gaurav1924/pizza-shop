import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "app",
  initialState: {
    orderDelivered: 0,
    orders: [],
  },
  reducers: {
    setOrderDelivered: (state, action) => {
      state.orderDelivered = state.orderDelivered + 1;
    },
    updateOrdersArr: (state, action) => {
      state.orders = action.payload;
    },
  },
});
export const { setOrderDelivered, updateOrdersArr } = orderSlice.actions;
export default orderSlice.reducer;
