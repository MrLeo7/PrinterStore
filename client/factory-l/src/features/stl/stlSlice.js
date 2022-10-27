import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  file: "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl",
};

const stlSlice = createSlice({
  name: "stl",
  initialState,
  reducers: {
    uploadFile: (state, action) => {
        state.file = action.payload;
        console.log(state.file)

    },
  },
});


export default stlSlice.reducer;
export const stlActions = stlSlice.actions;
