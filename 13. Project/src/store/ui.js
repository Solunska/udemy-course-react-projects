import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    show: false,
    notification: null,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state) {
            state.show = !state.show
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;