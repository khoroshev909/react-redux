import { fetchUsers } from './../actions/users'
import { IUser } from './../../models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserSlice  {
    loading: boolean,
    users: IUser[],
    error: null | string
}

const initialState: IUserSlice = {
    loading: true,
    users: [],
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        // fetchUsersRequest(state) {
        //     state.loading = true
        // },
        // fetchUsersSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.error = null
        //     state.users = action.payload
        //     state.loading = false
        // },
        // fetchUsersError(state, action: PayloadAction<string>) {
        //     state.error = action.payload
        //     state.loading = false
        // }
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.error = null
            state.users = action.payload
            state.loading = false
        },
        [fetchUsers.pending.type]: (state) => {
            state.loading = false
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        },
    }
})

const { reducer: userReducer, actions } = userSlice

export {
    userReducer
}


