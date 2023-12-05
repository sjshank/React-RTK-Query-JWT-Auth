import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface IAuthState {
  email: string | null;
  access_token: string | null;
}

//Defining initial state
const INITIAL_STATE = {
  email: null,
  access_token: null,
} as IAuthState;

//defining slice. It will set credentials after successfull login
//It will logout user from application
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setCredentials: (state: IAuthState, action: PayloadAction<IAuthState>) => {
      const { email, access_token } = action.payload;
      state.email = email;
      state.access_token = access_token;
    },
    logOut: (state: IAuthState) => {
      state.email = null;
      state.access_token = null;
    },
  },
});

//exporting actions
export const { setCredentials, logOut } = authSlice.actions;

//exporting reduer
export default authSlice.reducer;

//deriving data
export const selectCurrentEmail = (state: RootState) => state!.auth.email;
export const selectCurrentToken = (state: RootState) => state!.auth.access_token;
