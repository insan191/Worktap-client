import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { allUsersApi } from './reducers/api/allUsers'
import { chatsApi } from './reducers/api/chats'
import { orderApi } from './reducers/api/order'
import { profileApi } from './reducers/api/profile'
import { workApi } from './reducers/api/work'
import user from './reducers/slice/user'
const rootReducer = combineReducers({
	user,

	[workApi.reducerPath]: workApi.reducer,
	[profileApi.reducerPath]: profileApi.reducer,
	[allUsersApi.reducerPath]: allUsersApi.reducer,
	[chatsApi.reducerPath]: chatsApi.reducer,
	[orderApi.reducerPath]: orderApi.reducer,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(workApi.middleware)
			.concat(profileApi.middleware)
			.concat(allUsersApi.middleware)
			.concat(chatsApi.middleware)
			.concat(orderApi.middleware),
})

export const persistor = persistStore(store)

export default store
