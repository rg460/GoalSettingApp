import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const intialState ={
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}