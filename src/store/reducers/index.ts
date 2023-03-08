import {combineReducers} from "redux";
import {catsReducer} from "./catsReducers";

export const rootReducer = combineReducers({
    cats: catsReducer
})

export type RootState = ReturnType<typeof rootReducer>