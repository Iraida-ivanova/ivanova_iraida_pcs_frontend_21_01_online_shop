import {configureStore} from "@reduxjs/toolkit";
import cartListSliceReducer from "./reducers/cartSlice";
import userSliceReducer from "./reducers/userSlice";


export default configureStore({
    reducer: {
        cartItems: cartListSliceReducer,
        user: userSliceReducer,
    }
})