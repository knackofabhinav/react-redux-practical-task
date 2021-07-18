import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  userWallets: [],
  showType0: true,
  showType1: true,
  showType2: true,
  showType3: true,
  showType4: true,
  showAll: true,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState: initialState,
  reducers: {
    addInitialData: (state, action) => {
      state.status = "fullfilled";
      state.userWallets = action.payload;
    },
    setShowType0: (state) => {
      if (state.showType0) {
        state.showType0 = false;
        state.showAll = false;
      } else {
        state.showType0 = true;
      }
    },
    setShowType1: (state) => {
      if (state.showType1) {
        state.showType1 = false;
        state.showAll = false;
      } else {
        state.showType1 = true;
      }
    },
    setShowType2: (state) => {
      if (state.showType2) {
        state.showType2 = false;
        state.showAll = false;
      } else {
        state.showType2 = true;
      }
    },
    setShowType3: (state) => {
      if (state.showType3) {
        state.showType3 = false;
        state.showAll = false;
      } else {
        state.showType3 = true;
      }
    },
    setShowType4: (state) => {
      if (state.showType4) {
        state.showType4 = false;
        state.showAll = false;
      } else {
        state.showType4 = true;
      }
    },
    setShowAll: (state) => {
      if (!state.showAll) {
        state.showType0 = true;
        state.showType1 = true;
        state.showType2 = true;
        state.showType3 = true;
        state.showType4 = true;
        state.showAll = true;

        console.log(current(state));
      } else {
        state.showType0 = false;
        state.showType1 = false;
        state.showType2 = false;
        state.showType3 = false;
        state.showType4 = false;
        state.showAll = false;
        console.log(current(state));
      }
    },
  },
});

export const {
  addInitialData,
  setShowType0,
  setShowType1,
  setShowType2,
  setShowType3,
  setShowType4,
  setShowAll,
} = walletSlice.actions;
export const userWallets = (state) => state.wallets.userWallets;
export const showTypes = (state) => state.wallets;
export default walletSlice.reducer;
