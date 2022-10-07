import { IPost } from './../../models'
import axios from '../../axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
    'post/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IPost[]>('posts/')
            return response.data 
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }

    }
)