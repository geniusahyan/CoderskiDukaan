import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
    },
    reducers: {
        setData : (state,action)=>{
            state.data = action.payload;
        },
    }
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;
