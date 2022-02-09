import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import authAPI, {IAuthPayload} from "../../api/authAPI";

export interface IInitialState {
    logged: boolean,
    errorText: string,
    loading: boolean,
    token: string | null;
}

const initialState: IInitialState = {
    logged: false,
    errorText: '',
    loading: false,
    token: null
}

export const login = createAsyncThunk(
    'auth/login',
    async (userData: IAuthPayload, thunkAPI) => {
        console.log('here', userData)
        const response = await authAPI.login(userData)
        console.log(response);
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogged: (state, action:PayloadAction<boolean>) => {
            state.logged = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.errorText = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload
        },
    },
})

export const { setError, setLoading, setLogged, setToken } = authSlice.actions

export default authSlice.reducer
