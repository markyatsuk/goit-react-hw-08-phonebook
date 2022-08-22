import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Welcome ✔", { theme: "colored" });
      return data;
    } catch (error) {
      toast.info("This user is already registered ⚠", { theme: "colored" });
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
      toast.success("Welcome ✔", { theme: "colored" });
      return data;
    } catch (error) {
      toast.error("Wrong login or password ❗", { theme: "colored" });
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
