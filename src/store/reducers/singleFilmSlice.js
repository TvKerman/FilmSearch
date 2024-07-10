import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    film: {},
    ratings: [{Source: "", Value: ""}],
    loading: false,
    error: null,
};

const singleFilmSlice = createSlice({
    name: "singleFilm",
    initialState,
    reducers: {
        fetchFilm: (state) => {
            state.loading = true;
        },
        fetchFilmSuccess: (state, action) => {
            state.film = action.payload;
            state.ratings = action.payload.Ratings;
            state.loading = false;
        },
        fetchFilmError: (state, action) => {
            state.error = action.payload;
            state.ratings = [{Source: "", Value: ""}]
            state.loading = false;
        },
    },
});

export const singleFilmActions = singleFilmSlice.actions;
export const singleFilmReducer = singleFilmSlice.reducer;
