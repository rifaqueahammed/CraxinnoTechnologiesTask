

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accounts: [],
  initialBalance: []
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    accountsData: (state,action) => {
        state.initialBalance.push(action.payload);
      },
      
  },
})

// Action creators are generated for each case reducer function
export const { addAccount, accountsData } = accountSlice.actions

export default accountSlice.reducer

