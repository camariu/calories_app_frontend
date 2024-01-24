import { login, register,   } from './operations';


import { createSlice } from '@reduxjs/toolkit';

const handleRejected = (state, action) => {
  state.isAuthLoading = false;
  state.authError = action.payload;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  authError: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isAuthLoading = 'register';
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isAuthLoading = false;
        state.authError = null;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(login.pending, state => {
        state.isAuthLoading = 'login';
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isAuthLoading = false;
        state.authError = null;
      })
      .addCase(login.rejected, handleRejected)
 
  
  },
});

export const  userReducer = userSlice.reducer;