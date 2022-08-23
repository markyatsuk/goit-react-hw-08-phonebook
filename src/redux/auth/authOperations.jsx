import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/signup",
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credential);
      console.log(data);
      token.set(data.token);

      Notiflix.Notify.success("Welcome ✔", {
        timeout: 2000,
      });
      return data;
    } catch (error) {
      Notiflix.Notify.failure("This user is already registered ⚠", {
        timeout: 2000,
      });
      return rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credential);
      console.log(data);
      token.set(data.token);

      Notiflix.Notify.success("Welcome ✔", {
        timeout: 2000,
      });
      return data;
    } catch (error) {
      Notiflix.Notify.failure("Wrong login or password ❗", {
        timeout: 2000,
      });
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authOperations = { register, logIn, logOut, fetchCurrentUser };
export default authOperations;
