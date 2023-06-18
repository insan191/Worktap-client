import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chatsApi = createApi({
	reducerPath: 'chats',
	tagTypes: ['chats'],
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
	endpoints: build => ({
		getChats: build.query({
			query: id => `/chats/${id}`,
			providesTags: ['chats'],
		}),
		createChat: build.mutation({
			query: (arg) => ({
				url: '/chats',
				method: 'POST',
				body: { ...arg },
			}),
			invalidatesTags: ['chats']
		})
	}),
})

export const { useGetChatsQuery, useCreateChatMutation } = chatsApi
