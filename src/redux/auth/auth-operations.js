import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  }
);

export const logIn = createAsyncThunk("auth/logIn", async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  token.set(data.token);
  return data;
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  token.unset();
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    const { data } = await axios.get("/users/current");
    return data;
  }
);
