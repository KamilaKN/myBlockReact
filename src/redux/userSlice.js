import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
    },
    reducers: {
        //назвпание actiona: функция Reducer
        loginSuccess: (state, action) => {
            state.currentUser = action.payload; //меняем состояние на то, что пришло в action
        },
        logout: (state) => {
            state.currentUser = null;
        },
    },
});

export default userSlice.reducer;
export const { loginSuccess, logout } = userSlice.actions;
