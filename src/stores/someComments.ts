import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { Comments } from '../interfaces/Comments'

interface SomeComments {
    data: Comments | null
    status : 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const  initialState : SomeComments ={
    data: null,
    status: 'idle',
    error : null
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get(process.env.REACT_APP_COMMENTS_GET!)
    return response.data
})

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchData.fulfilled, (state, action : PayloadAction<Comments>) => {
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