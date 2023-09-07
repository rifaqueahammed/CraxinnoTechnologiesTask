import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
  initialBalance: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    accountsData: (state, action) => {
      state.initialBalance.push(action.payload);
    },
  },
});

export const { addAccount, accountsData } = accountSlice.actions;

export default accountSlice.reducer;
