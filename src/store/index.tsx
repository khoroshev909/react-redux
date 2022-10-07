import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { userReducer } from "./slices/userSlice"
import {postApi} from "../services/postService";

const rootReducer = combineReducers({
    user: userReducer,
    [postApi.reducerPath]: postApi.reducer
})

export function setupStore() {
    return configureStore({
        reducer:  rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer> 
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']