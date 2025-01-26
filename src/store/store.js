import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import chatReducer from './slices/chatSlice'
import authReducer from './slices/authSlice'
import workspaceReducer from './slices/workspaceSlice'
import channelReducer from './slices/channelSlice'
import dmReducer from './slices/dmSlice'

// Combine reducers
const rootReducer = combineReducers({
    chat: chatReducer,
    auth: authReducer,
    workspace: workspaceReducer,
    channel: channelReducer,
    dm: dmReducer,
})

// Persist config
const persistConfig = {
    key: 'root',
    storage,
}

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

// Persistor
export const persistor = persistStore(store)
