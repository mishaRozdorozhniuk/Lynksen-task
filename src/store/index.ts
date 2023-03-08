import { configureStore } from '@reduxjs/toolkit';
import { catsReducer } from "./reducers/catsReducers";

const store = configureStore({
    reducer: {
        cats: catsReducer,
    }
});

export default store;