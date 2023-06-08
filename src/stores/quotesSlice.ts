import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { Quotes } from '../interfaces/Quotes'

interface QuoteState {
    data: Quotes | null
    status : 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState : QuoteState ={
    data: null,
    status: 'idle',
    error : null
}

export const fetchData = createAsyncThunk('data/fetchQuoteData', async () => {
    const response = await axios.get(process.env.REACT_APP_QUOTES_GET!)
    return response.data
})

const dataSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchData.fulfilled, (state, action : PayloadAction<Quotes>) => {
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