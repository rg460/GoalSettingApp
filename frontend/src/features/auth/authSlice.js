import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const intialState ={
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}