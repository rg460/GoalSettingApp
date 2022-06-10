import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const intialState ={
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}
// Register user 


export const authSlice = createSlice({
    name: 'auth',
    intialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.isLoading = false
        },
    },
    extraReducers: () => {

    }
})
export const { reset } = authSlice.action
export default authSlice.reducer

