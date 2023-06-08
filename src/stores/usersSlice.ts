import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { Users } from '../interfaces/Users'

interface UsersState {
    data: Users | null
    status : 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState : UsersState ={
    data: null,
    status: 'idle',
    error : null
}

export const fetchData = createAsyncThunk('data/fetchUserData', async () => {
    const response = await axios.get(process.env.REACT_APP_USERS_GET!)
    return response.data
})

const dataSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchData.fulfilled, (state, action : PayloadAction<Users>) => {
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