import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { AppState, UserInfo } from "types";
import { axiosPublic } from "utils";

const modulePrefix = "/api";

const initialState: AppState = {
  user: JSON.parse(localStorage?.getItem("user") as string) || null,
  token: "",
  username: "",
  password: "",
  success: false,
  error: false,
  message: "",
};

export const login = createAsyncThunk(
  `${modulePrefix}/signin`,
  async (_, { getState }) => {
    const state = getState() as RootState;

    const res = await axiosPublic.post(`${modulePrefix}/signin`, {
      email: state.userData.username,
      password: state.userData.password,
    });

    return res.data;
  }
);

export const signUp = createAsyncThunk(
  `${modulePrefix}/signup`,
  async (userData: UserInfo, { getState }) => {
    const res = await axiosPublic.post(`${modulePrefix}/signup`, userData);
    return res.data;
  }
);

export const logout = createAsyncThunk(
  `${modulePrefix}/logout`,
  async (_, { getState }) => {
    return true;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName(state, action: PayloadAction<AppState["username"]>) {
      state.username = action.payload;
    },
    updatePassword(state, action: PayloadAction<AppState["password"]>) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<AppState["user"]>) => {
          localStorage.setItem("user", JSON.stringify(action.payload));
          state.user = action.payload;
        }
      )
      .addCase(login.rejected, (state, action: any) => {
        state.message = "Invalid email or password";
        state.error = true;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.removeItem("user");
        state.user = null;
        state.username = "";
        state.password = "";
        state.success = false;
        state.error = false;
      })
      .addCase(signUp.rejected, (state, action: any) => {
        state.message = "User already exists with the given email";
        state.error = true;
      })
      .addCase(signUp.fulfilled, (state, action: any) => {
        state.success = true;
      });
  },
});

export const { updateUserName, updatePassword } = userSlice.actions;
