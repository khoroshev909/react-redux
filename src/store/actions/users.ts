import { IUser } from './../../models'
import { AppDispatch } from './../index'
import axios from '../../axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     dispatch(fetchUsersRequest())
//     try {
//         const response = await axios.get<IUser[]>('users/')
//         dispatch(fetchUsersSuccess(response.data))
//     } catch (error: any) {
//         const { message } = error
//         dispatch(fetchUsersError(message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('users/')
            return response.data 
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }

    }
)