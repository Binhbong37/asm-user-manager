import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isLoading: true,
    errMess: null,
};

export const usersSlice = createSlice({
    name: 'fetchUsers',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.isLoading = true;
                state.errMess = null;
                state.users = [];
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoading = false;
                state.errMess = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.errMess = 'Loi fetch data';
                state.isLoading = false;
                state.users = [];
            });
    },
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch('https://randomuser.me/api/?page=1&results=10');
    const data = await res.json();

    return data.results;
});
