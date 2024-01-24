import { createAsyncThunk } from "@reduxjs/toolkit";

import { userRegister, userLogin } from "../api/api";

 


export const register = createAsyncThunk(
    'users/register',
    async (user, thunkAPI) => {
      try {
        const response = await userRegister.create(user)
        console.log(response.data.data);
        return response.user;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const login = createAsyncThunk(
    'users/login',
    async (user, thunkAPI) => {
      try {
        const response = await  userLogin.create(user);
        console.log(response.user);
        return response.user;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  
 
  
   