import {configureStore, createStore} from "@reduxjs/toolkit";
import cartListSliceReducer, {cartSlice} from "./reducers/cartSlice";
import userSliceReducer from "./reducers/userSlice";


export default configureStore({
    reducer: {
        cartItems: cartListSliceReducer,
        user: userSliceReducer,
    }
})