import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com' }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: ({ query }) => {
        return { url: `/?s=${query}&apikey=169ada60`, method: 'get' }
      },
    }),
  }),
});

export const { useGetMoviesMutation } = movieApi