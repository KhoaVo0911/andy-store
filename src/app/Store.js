import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import loginReducer from "../components/features/login/loginSlice.jsx";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        login: loginReducer,
    }
});

export default Store;