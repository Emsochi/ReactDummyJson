import { configureStore } from "@reduxjs/toolkit";
import someComments from "./someComments";

const store = configureStore({
    reducer: {
        comments: someComments
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store