import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accounts:[],
  sum:0,
  initialBalance:[{
    month:0,
    balance:0
  }]
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount: (state,action) => {
        state.accounts.push(action.payload);
    },
    totalBalance: (state) => {
         state.sum = state.accounts.reduce((acc, currentValue) => acc + currentValue);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAccount, totalBalance } = accountSlice.actions

export default accountSlice.reducer
