//jsonplaceholder.typicode createAsyncThunk
/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users"; //fake api, that does both post and get requests

const initialState= [
  { id: "0", name: "Abu Charles" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Gray" },
];

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (initialState) => {
    try {
      const response = await axios.get(USERS_URL);
      return [...response.data];
    } catch (err) {
      return err.message;
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
  state.users.find(user => user.id === userId)


export default userSlice.reducer;*/

import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getUsers: builder.query({
          query: () => '/users',
          transformResponse: responseData => {
              return usersAdapter.setAll(initialState, responseData)
          },
          providesTags: (result, error, arg) => [
              { type: 'User', id: "LIST" },
              ...result.ids.map(id => ({ type: 'User', id }))
          ]
      })
  })
})

export const {
  useGetUsersQuery
} = usersApiSlice

// returns the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

// Creates memoized selector
const selectUsersData = createSelector(
  selectUsersResult,
  usersResult => usersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds
  // Pass in a selector that returns the posts slice of state
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)

/*const loadedUsers = action.payload.map((user) => {
        
        user.coolUsers = 
          [
            { id: "0", name: "Abu Charles" },
            { id: "1", name: "Neil Young" },
            { id: "2", name: "Dave Gray" },
          ]
        return coolUsers;
      });
      state.users = state.users.push(loadedUsers); */
