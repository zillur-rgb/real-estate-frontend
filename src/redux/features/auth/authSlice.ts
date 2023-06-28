import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserData {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserToken {
  token: string;
}

export interface UserResponse {
  data: UserData;
  token: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as UserData | null,
  },
  reducers: {
    setUser: (state, action: PayloadAction<UserResponse | null>) => {
      state.user = action.payload?.data || null;
      console.log("set user", state.user);
    },
  },
});

export const { setUser } = authSlice.actions;
