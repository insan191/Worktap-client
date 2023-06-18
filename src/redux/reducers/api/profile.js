import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
	reducerPath: 'profile',
	tagTypes: ['profile'],
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
	endpoints: build => ({
		getProfile: build.query({
			query: id => `/profile/${id}`,
			providesTags: ['profile'],
		}),
		changeProfile: build.mutation({
			query: ({ _id, arg }) => ({
				url: `/users/${_id}/changeprofile`,
				method: 'PATCH',
				body: arg,
			}),
			invalidatesTags: ['profile'],
		}),
	}),
})

export const { useGetProfileQuery, useChangeProfileMutation } = profileApi
