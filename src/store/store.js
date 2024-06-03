import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from '../services/movieApi'
import { apiSlice4 } from '../services/saveListApi'
import moviesReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    [apiSlice4.reducerPath]: apiSlice4.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    apiSlice4.middleware,
    movieApi.middleware
  )
});

export const { useCreateMovieMutation, useGetMovieByIdQuery } = apiSlice4;