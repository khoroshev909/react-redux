import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IPost} from "../models";

export const postApi = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ['Post'],
    endpoints: (build ) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit = 5) => ({
                url: 'posts/',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                url: 'posts/',
                method: "post",
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                url: 'posts/' + post.id,
                method: "put",
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                url: 'posts/' + post.id,
                method: "delete"
            }),
            invalidatesTags: ['Post']
        })
    })
})