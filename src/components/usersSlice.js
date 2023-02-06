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
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.errMess = 'Loi fetch data';
            });
    },
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch('https://randomusr.me/api/');
    const data = await res.json();

    return data.results;
});
