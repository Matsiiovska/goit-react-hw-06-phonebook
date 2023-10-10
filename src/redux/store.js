import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // Це підказує Redux Persist зберігати лише дані контактів
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);