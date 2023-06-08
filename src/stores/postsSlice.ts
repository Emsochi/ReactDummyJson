import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { Posts } from '../interfaces/Posts'

interface PostState {
    data: Posts | null
    status : 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState : PostState ={
    data: null,
    status: 'idle',
    error : null
}

export const fetchData = createAsyncThunk('data/fetchPostsData', async () => {
    const response = await axios.get(process.env.REACT_APP_POSTS_GET!)
    return response.data
})

const dataSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchData.fulfilled, (state, action : PayloadAction<Posts>) => {
            state.status = 'succeeded'
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message!
        })
    }
})

export default dataSlice.reducer