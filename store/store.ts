import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { authApi } from "./queries/authApi";
import { photoApi } from "./queries/photoApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]:authApi.reducer,
    [photoApi.reducerPath]:photoApi.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
