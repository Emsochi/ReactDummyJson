import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./quotesSlice";
import someComments from "./someComments";

const store = configureStore({
    reducer: {
        quotes: quotesSlice,
        comments: someComments

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store