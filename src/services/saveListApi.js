import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice4 = createApi({
  reducerPath: 'apiSlice4',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://acb-api.algoritmika.org/api/',
  }),
  endpoints: (builder) => ({
    createMovie: builder.mutation({
      query: (movie) => ({
        url: 'movies/list',
        method: 'POST',
        body: movie,
      }),
    }),
    getMovieById: builder.query({
      query: (id) => `/movies/list/${id}`,
    }),
  }),
  
});

export const { useCreateMovieMutation, useGetMovieByIdQuery } = apiSlice4;
