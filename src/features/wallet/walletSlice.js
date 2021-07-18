import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  userWallets: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState: initialState,
  reducers: {
    addInitialData: (state, action) => {
      state.status = "fullfilled";
      state.userWallets = action.payload;
    },
  },
});

export const { addInitialData } = walletSlice.actions;
export const userWallets = (state) => state.wallets.userWallets;

export default walletSlice.reducer;
