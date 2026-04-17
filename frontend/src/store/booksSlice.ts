import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Book {
    id: number;
    title: string;
    description: string;
    authorId: number;
}

/** Formato JSON del backend Nest (snake_case) */
interface BookApiResponse {
    id: number;
    titulo: string;
    descripcion: string;
    autor_id: number;
}

function mapBookFromApi(raw: BookApiResponse): Book {
    return {
        id: raw.id,
        title: raw.titulo,
        description: raw.descripcion,
        authorId: raw.autor_id,
    };
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const response = await fetch('http://localhost:3000/books');
    if (!response.ok) {
        throw new Error(`Books request failed: ${response.status}`);
    }
    const data = (await response.json()) as BookApiResponse[];
    return data.map(mapBookFromApi);
});

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [] as Book[],
        status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBooks.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = action.payload;
            state.status = 'succeeded';
        })
        .addCase(fetchBooks.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

export default booksSlice.reducer;