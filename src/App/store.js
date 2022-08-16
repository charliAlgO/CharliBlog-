/*import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
//import postsReducer from "../Features/posts/postsSlice"; - remove it, bcos of the apiSlice
import usersReducer from "../Features/users/usersSlice"
import { apiSlice } from "../Features/api/apiSlice";

/*export const store = configureStore({
  reducer: {
    posts:postsReducer,
    users:usersReducer
  },
});*/
/*export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})*/

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../Features/api/apiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
