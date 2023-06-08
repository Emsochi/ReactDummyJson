import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./quotesSlice";
import someComments from "./someComments";
import postsSlice from "./postsSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
    reducer: {
        quotes: quotesSlice,
        comments: someComments,
        posts: postsSlice,
        users: usersSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store