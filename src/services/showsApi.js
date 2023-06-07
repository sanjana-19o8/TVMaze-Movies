import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api_url = 'https://api.tvmaze.com';

export const showsApi = createApi({
    reducerPath: 'showsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: api_url,
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json');
            return headers;
        }
    }),
    endpoints: (builder)=> ({
        getShows: builder.query({
            query: (query) => `/search/shows?q=${query}`,
        }),
        getSingleShow: builder.query({
            query: (showId) => `/lookup/shows?thetvdb=${showId}`,
        })
    }),
})

export const { useGetShowsQuery, useGetSingleShowQuery} = showsApi;