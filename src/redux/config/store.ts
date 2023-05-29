import { configureStore } from '@reduxjs/toolkit';
import contentSlice from '../slice/contentSlice';

export const store = configureStore({
  reducer: {
    content: contentSlice,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
