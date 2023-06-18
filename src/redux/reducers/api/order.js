import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
	reducerPath: 'order',
	tagTypes: ['order'],
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
	endpoints: build => ({
		getAllOrders: build.query({
			query: ({
				search,
				category,
				subcategory,
				criteria,
				maxNumber,
				minNumber,
			}) =>
				`/orders?search=${search}&category=${category}&subcategory=${subcategory}&criteria=${criteria}&min=${minNumber}&max=${maxNumber}`,
			providesTags: ['order'],
		}),
		createOrder: build.mutation({
			query: arg => ({
				url: '/createorder',
				method: 'POST',
				body: arg,
			}),
			invalidatesTags: ['order'],
		}),
		getOrder: build.query({
			query: id => `/order/${id}`,
		}),
	}),
})

export const {
	useGetAllOrdersQuery,
	useCreateOrderMutation,
	useGetOrderQuery,
} = orderApi
