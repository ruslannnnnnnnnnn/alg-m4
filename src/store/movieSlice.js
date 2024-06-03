import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    favorites: [],
    moviIdList: [],
    saveListId: []
  },
  reducers: {
    addMoviesToFavorites: (state, { payload }) => {
      const movies = state.favorites.find(product => product.imdbID === payload.imdbID);
      if (movies) return state;
      state.moviIdList.push(payload.imdbID);
      state.favorites.push(payload);
    },
    removeMoviesFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload);
    },
    addToSaveListId: (state, { payload }) => {
      state.saveListId.push(payload)
    }
  },

})

export const { addMoviesToFavorites, removeMoviesFromFavorites, addToSaveListId } = moviesSlice.actions;
export const selectAllFavoriteMovies = (state) => state.movies.favorites;
export const selectAllMoviIdList = (state) => state.movies.moviIdList;
export const selectAllSaveListId = (state) => state.movies.saveListId;
export default moviesSlice.reducer;