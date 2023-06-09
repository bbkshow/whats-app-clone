import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './chatsSlice';
import groupChatsReducer from './groupChatsSlice';

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    groups: groupChatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
