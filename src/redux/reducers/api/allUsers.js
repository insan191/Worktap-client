import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const allUsersApi = createApi({
	reducerPath: 'allUsers',
	tagTypes: ['allUsers'],
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
	endpoints: build => ({
		getAllUsers: build.query({
			query: () => '/users',
			providesTags: ['allUsers'],
		}),
	}),
})

export const { useGetAllUsersQuery } = allUsersApi
