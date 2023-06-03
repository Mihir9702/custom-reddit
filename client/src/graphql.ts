import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Create = {
  content: Scalars['String']
  header: Scalars['String']
}

export type Delete = {
  nameid: Scalars['String']
  postid: Scalars['Float']
}

export type Input = {
  nameid?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  username: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: Post
  deletePost: Post
  deleteUser: Scalars['Boolean']
  likePost: Post
  login: User
  logout: Scalars['Boolean']
  signup: User
  unlikePost: Post
  updatePost: Post
  updateUser: User
}

export type MutationCreatePostArgs = {
  params: Create
}

export type MutationDeletePostArgs = {
  params: Delete
}

export type MutationLikePostArgs = {
  postid: Scalars['Float']
}

export type MutationLoginArgs = {
  params: Input
}

export type MutationSignupArgs = {
  params: Input
}

export type MutationUnlikePostArgs = {
  postid: Scalars['Float']
}

export type MutationUpdatePostArgs = {
  params: Update
}

export type MutationUpdateUserArgs = {
  params: UpdateUser
}

export type Post = {
  __typename?: 'Post'
  content: Scalars['String']
  createdAt: Scalars['String']
  header: Scalars['String']
  id: Scalars['Float']
  likes?: Maybe<Array<Scalars['Float']>>
  owner: Scalars['String']
  pinned?: Maybe<Scalars['Boolean']>
  postid: Scalars['Float']
  updatedAt: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  owner: Array<Post>
  post: Post
  postSearch: Array<Post>
  posts: Array<Post>
  user?: Maybe<User>
  userSearch: User
  users: Array<User>
}

export type QueryOwnerArgs = {
  owner: Scalars['String']
}

export type QueryPostArgs = {
  postid: Scalars['Float']
}

export type QueryPostSearchArgs = {
  header: Scalars['String']
}

export type QueryUserSearchArgs = {
  nameid: Scalars['String']
}

export type QueryUsersArgs = {
  nameid: Scalars['String']
}

export type Update = {
  header: Scalars['String']
  postid: Scalars['Float']
}

export type UpdateUser = {
  bio?: InputMaybe<Scalars['String']>
  nameid?: InputMaybe<Scalars['String']>
  photoid?: InputMaybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  bio?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  id: Scalars['Float']
  likes?: Maybe<Scalars['Float']>
  nameid: Scalars['String']
  password: Scalars['String']
  photoid?: Maybe<Scalars['String']>
  posts?: Maybe<Array<Post>>
  updatedAt: Scalars['String']
  userid: Scalars['Float']
  username: Scalars['String']
}

export type PostFragmentFragment = {
  __typename?: 'Post'
  header: string
  content: string
  owner: string
  likes?: Array<number> | null
  postid: number
  createdAt: string
}

export type CreatePostMutationVariables = Exact<{
  params: Create
}>

export type CreatePostMutation = {
  __typename?: 'Mutation'
  createPost: {
    __typename?: 'Post'
    header: string
    content: string
    owner: string
  }
}

export type DeletePostMutationVariables = Exact<{
  params: Delete
}>

export type DeletePostMutation = {
  __typename?: 'Mutation'
  deletePost: { __typename?: 'Post'; postid: number; owner: string }
}

export type LikePostMutationVariables = Exact<{
  postid: Scalars['Float']
}>

export type LikePostMutation = {
  __typename?: 'Mutation'
  likePost: {
    __typename?: 'Post'
    postid: number
    likes?: Array<number> | null
  }
}

export type LoginMutationVariables = Exact<{
  params: Input
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: { __typename?: 'User'; username: string }
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean }

export type SignupMutationVariables = Exact<{
  params: Input
}>

export type SignupMutation = {
  __typename?: 'Mutation'
  signup: { __typename?: 'User'; nameid: string; userid: number }
}

export type UnlikePostMutationVariables = Exact<{
  postid: Scalars['Float']
}>

export type UnlikePostMutation = {
  __typename?: 'Mutation'
  unlikePost: {
    __typename?: 'Post'
    postid: number
    likes?: Array<number> | null
  }
}

export type UpdatePostMutationVariables = Exact<{
  params: Update
}>

export type UpdatePostMutation = {
  __typename?: 'Mutation'
  updatePost: { __typename?: 'Post'; header: string }
}

export type UpdateUserMutationVariables = Exact<{
  params: UpdateUser
}>

export type UpdateUserMutation = {
  __typename?: 'Mutation'
  updateUser: {
    __typename?: 'User'
    nameid: string
    photoid?: string | null
    bio?: string | null
  }
}

export type OwnerQueryVariables = Exact<{
  owner: Scalars['String']
}>

export type OwnerQuery = {
  __typename?: 'Query'
  owner: Array<{
    __typename?: 'Post'
    header: string
    content: string
    owner: string
    likes?: Array<number> | null
    postid: number
    createdAt: string
  }>
}

export type PostQueryVariables = Exact<{
  postid: Scalars['Float']
}>

export type PostQuery = {
  __typename?: 'Query'
  post: {
    __typename?: 'Post'
    header: string
    content: string
    owner: string
    likes?: Array<number> | null
    postid: number
    createdAt: string
  }
}

export type PostSearchQueryVariables = Exact<{
  header: Scalars['String']
}>

export type PostSearchQuery = {
  __typename?: 'Query'
  postSearch: Array<{
    __typename?: 'Post'
    header: string
    content: string
    owner: string
  }>
}

export type PostsQueryVariables = Exact<{ [key: string]: never }>

export type PostsQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'Post'
    postid: number
    header: string
    content: string
    owner: string
    likes?: Array<number> | null
    createdAt: string
  }>
}

export type UserQueryVariables = Exact<{ [key: string]: never }>

export type UserQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    id: number
    nameid: string
    userid: number
    photoid?: string | null
    bio?: string | null
    likes?: number | null
    posts?: Array<{
      __typename?: 'Post'
      header: string
      content: string
      owner: string
      likes?: Array<number> | null
      postid: number
      createdAt: string
    }> | null
  } | null
}

export type UserSearchQueryVariables = Exact<{
  nameid: Scalars['String']
}>

export type UserSearchQuery = {
  __typename?: 'Query'
  userSearch: {
    __typename?: 'User'
    id: number
    nameid: string
    userid: number
    photoid?: string | null
    bio?: string | null
    likes?: number | null
    posts?: Array<{
      __typename?: 'Post'
      header: string
      content: string
      owner: string
      likes?: Array<number> | null
      postid: number
      createdAt: string
    }> | null
  }
}

export type UsersQueryVariables = Exact<{
  nameid: Scalars['String']
}>

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{ __typename?: 'User'; nameid: string; photoid?: string | null }>
}

export const PostFragmentFragmentDoc = gql`
  fragment PostFragment on Post {
    header
    content
    owner
    likes
    postid
    createdAt
  }
`
export const CreatePostDocument = gql`
  mutation CreatePost($params: Create!) {
    createPost(params: $params) {
      header
      content
      owner
    }
  }
`

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument
  )
}
export const DeletePostDocument = gql`
  mutation DeletePost($params: Delete!) {
    deletePost(params: $params) {
      postid
      owner
    }
  }
`

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument
  )
}
export const LikePostDocument = gql`
  mutation LikePost($postid: Float!) {
    likePost(postid: $postid) {
      postid
      likes
    }
  }
`

export function useLikePostMutation() {
  return Urql.useMutation<LikePostMutation, LikePostMutationVariables>(
    LikePostDocument
  )
}
export const LoginDocument = gql`
  mutation Login($params: Input!) {
    login(params: $params) {
      username
    }
  }
`

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument)
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument
  )
}
export const SignupDocument = gql`
  mutation Signup($params: Input!) {
    signup(params: $params) {
      nameid
      userid
    }
  }
`

export function useSignupMutation() {
  return Urql.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument
  )
}
export const UnlikePostDocument = gql`
  mutation UnlikePost($postid: Float!) {
    unlikePost(postid: $postid) {
      postid
      likes
    }
  }
`

export function useUnlikePostMutation() {
  return Urql.useMutation<UnlikePostMutation, UnlikePostMutationVariables>(
    UnlikePostDocument
  )
}
export const UpdatePostDocument = gql`
  mutation UpdatePost($params: Update!) {
    updatePost(params: $params) {
      header
    }
  }
`

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument
  )
}
export const UpdateUserDocument = gql`
  mutation UpdateUser($params: UpdateUser!) {
    updateUser(params: $params) {
      nameid
      photoid
      bio
    }
  }
`

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument
  )
}
export const OwnerDocument = gql`
  query Owner($owner: String!) {
    owner(owner: $owner) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`

export function useOwnerQuery(
  options: Omit<Urql.UseQueryArgs<OwnerQueryVariables>, 'query'>
) {
  return Urql.useQuery<OwnerQuery, OwnerQueryVariables>({
    query: OwnerDocument,
    ...options,
  })
}
export const PostDocument = gql`
  query Post($postid: Float!) {
    post(postid: $postid) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`

export function usePostQuery(
  options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'>
) {
  return Urql.useQuery<PostQuery, PostQueryVariables>({
    query: PostDocument,
    ...options,
  })
}
export const PostSearchDocument = gql`
  query postSearch($header: String!) {
    postSearch(header: $header) {
      header
      content
      owner
    }
  }
`

export function usePostSearchQuery(
  options: Omit<Urql.UseQueryArgs<PostSearchQueryVariables>, 'query'>
) {
  return Urql.useQuery<PostSearchQuery, PostSearchQueryVariables>({
    query: PostSearchDocument,
    ...options,
  })
}
export const PostsDocument = gql`
  query Posts {
    posts {
      postid
      header
      content
      owner
      likes
      createdAt
    }
  }
`

export function usePostsQuery(
  options?: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'>
) {
  return Urql.useQuery<PostsQuery, PostsQueryVariables>({
    query: PostsDocument,
    ...options,
  })
}
export const UserDocument = gql`
  query User {
    user {
      id
      nameid
      userid
      photoid
      bio
      likes
      posts {
        ...PostFragment
      }
    }
  }
  ${PostFragmentFragmentDoc}
`

export function useUserQuery(
  options?: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'>
) {
  return Urql.useQuery<UserQuery, UserQueryVariables>({
    query: UserDocument,
    ...options,
  })
}
export const UserSearchDocument = gql`
  query UserSearch($nameid: String!) {
    userSearch(nameid: $nameid) {
      id
      nameid
      userid
      photoid
      bio
      likes
      posts {
        ...PostFragment
      }
    }
  }
  ${PostFragmentFragmentDoc}
`

export function useUserSearchQuery(
  options: Omit<Urql.UseQueryArgs<UserSearchQueryVariables>, 'query'>
) {
  return Urql.useQuery<UserSearchQuery, UserSearchQueryVariables>({
    query: UserSearchDocument,
    ...options,
  })
}
export const UsersDocument = gql`
  query Users($nameid: String!) {
    users(nameid: $nameid) {
      nameid
      photoid
    }
  }
`

export function useUsersQuery(
  options: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'>
) {
  return Urql.useQuery<UsersQuery, UsersQueryVariables>({
    query: UsersDocument,
    ...options,
  })
}
