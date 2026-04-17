import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Author {
    id: number;
    nombres: string;
}

export const fetchAuthors = createAsyncThunk('authors/fetchAuthors', async () => {
    const response = await fetch('http://localhost:3000/authors');
    if (!response.ok) {
        throw new Error(`Authors request failed: ${response.status}`);
    }
    return response.json() as Promise<Author[]>;
});

export const authorsSlice = createSlice({
    name: 'authors',
    initialState: {
        authors: [] as Author[],
        status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAuthors.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAuthors.fulfilled, (state, action) => {
            state.authors = action.payload;
            state.status = 'succeeded';
        })
        .addCase(fetchAuthors.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

export default authorsSlice.reducer;