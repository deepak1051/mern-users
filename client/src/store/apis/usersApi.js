import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints(builder) {
    return {
      getUsers: builder.query({
        providesTags: ['User'],
        query: () => {
          return {
            url: `/users`,
            method: 'GET',
          };
        },
      }),
      getSingleUser: builder.query({
        providesTags: ['User'],
        query: (id) => {
          return {
            url: `/users/${id}`,
            method: 'GET',
          };
        },
      }),
      createUser: builder.mutation({
        invalidatesTags: ['User'],
        query: (user) => {
          return {
            url: '/users',
            method: 'POST',
            body: user,
          };
        },
      }),

      deleteUser: builder.mutation({
        invalidatesTags: ['User'],
        query: (id) => {
          return {
            url: `/users/${id}`,
            method: 'DELETE',
          };
        },
      }),

      updateUser: builder.mutation({
        invalidatesTags: ['User'],
        query: (user) => {
          return {
            url: `/users/${user._id}`,
            method: 'PUT',
            body: user,
          };
        },
      }),
    };
  },
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = usersApi;
export { usersApi };
