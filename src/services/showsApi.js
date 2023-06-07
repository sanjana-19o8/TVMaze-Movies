import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api_url = 'https://api.tvmaze.com/search';

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
            query: (query) => `/shows?q=${query}`,
        }),
    }),
})

export const { useGetShowsQuery} = showsApi;