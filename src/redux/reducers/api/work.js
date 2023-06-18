import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const workApi = createApi({
	reducerPath: 'work',
	tagTypes: ['work'],
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
	endpoints: build => ({
		getAllWorks: build.query({
			query: ({
				search,
				category,
				subcategory,
				criteria,
				minNumber,
				maxNumber,
			}) =>
				`/works?search=${search}&category=${category}&subcategory=${subcategory}&criteria=${criteria}&min=${minNumber}&max=${maxNumber}`,
			providesTags: ['work'],
		}),
		getMyWorks: build.query({
			query: id => `/works/${id}`,
			providesTags: ['work'],
		}),
		getWork: build.query({
			query: id => `/work/${id}`,
			providesTags: ['work'],
		}),
		createWork: build.mutation({
			query: arg => ({
				url: '/creatework',
				method: 'POST',
				body: arg,
			}),
			invalidatesTags: ['work'],
		}),
	}),
})

export const {
	useCreateWorkMutation,
	useGetAllWorksQuery,
	useGetMyWorksQuery,
	useGetWorkQuery,
} = workApi
