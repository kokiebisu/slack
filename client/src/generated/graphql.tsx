import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['String'];
  name: Scalars['String'];
  isPublic: Scalars['Boolean'];
  teamId: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  channels: Array<Channel>;
  avatarBackground: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type BaseResponse = {
  __typename?: 'BaseResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type AuthorizationResponse = {
  __typename?: 'AuthorizationResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type ChannelResponse = {
  __typename?: 'ChannelResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
};

export type ChannelsResponse = {
  __typename?: 'ChannelsResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  channels?: Maybe<Array<Channel>>;
};

export type TeamResponse = {
  __typename?: 'TeamResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
};

export type TeamsResponse = {
  __typename?: 'TeamsResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Team>>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  users?: Maybe<Array<User>>;
};

export type Query = {
  __typename?: 'Query';
  channels: ChannelsResponse;
  myTeams: TeamsResponse;
  team: TeamResponse;
  teams: TeamsResponse;
  me: UserResponse;
  users: UsersResponse;
};


export type QueryChannelsArgs = {
  teamId: Scalars['String'];
};


export type QueryTeamArgs = {
  teamId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logout: AuthorizationResponse;
  register: AuthorizationResponse;
  verifyUser: AuthorizationResponse;
  createChannel: ChannelResponse;
  createTeam: TeamResponse;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
};


export type MutationVerifyUserArgs = {
  digit: Scalars['Float'];
};


export type MutationCreateChannelArgs = {
  teamId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateTeamArgs = {
  avatarBackground: Scalars['String'];
  name: Scalars['String'];
};

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'message'>
  ) }
);

export type RegisterMutationVariables = {
  email: Scalars['String'];
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'message'>
  ) }
);

export type VerifyUserMutationVariables = {
  digit: Scalars['Float'];
};


export type VerifyUserMutation = (
  { __typename?: 'Mutation' }
  & { verifyUser: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'message'>
  ) }
);

export type ChannelsQueryVariables = {
  teamId: Scalars['String'];
};


export type ChannelsQuery = (
  { __typename?: 'Query' }
  & { channels: (
    { __typename?: 'ChannelsResponse' }
    & Pick<ChannelsResponse, 'ok' | 'message'>
    & { channels?: Maybe<Array<(
      { __typename?: 'Channel' }
      & Pick<Channel, 'name'>
    )>> }
  ) }
);

export type CreateChannelMutationVariables = {
  name: Scalars['String'];
  teamId: Scalars['String'];
};


export type CreateChannelMutation = (
  { __typename?: 'Mutation' }
  & { createChannel: (
    { __typename?: 'ChannelResponse' }
    & Pick<ChannelResponse, 'ok' | 'message'>
    & { channel?: Maybe<(
      { __typename?: 'Channel' }
      & Pick<Channel, 'name'>
    )> }
  ) }
);

export type CreateTeamMutationVariables = {
  name: Scalars['String'];
  avatarBackground: Scalars['String'];
};


export type CreateTeamMutation = (
  { __typename?: 'Mutation' }
  & { createTeam: (
    { __typename?: 'TeamResponse' }
    & Pick<TeamResponse, 'ok' | 'message'>
    & { team?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name' | 'avatarBackground'>
    )> }
  ) }
);

export type MyTeamsQueryVariables = {};


export type MyTeamsQuery = (
  { __typename?: 'Query' }
  & { myTeams: (
    { __typename?: 'TeamsResponse' }
    & Pick<TeamsResponse, 'ok' | 'message'>
    & { teams?: Maybe<Array<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name' | 'avatarBackground'>
    )>> }
  ) }
);

export type TeamQueryVariables = {
  teamId: Scalars['String'];
};


export type TeamQuery = (
  { __typename?: 'Query' }
  & { team: (
    { __typename?: 'TeamResponse' }
    & Pick<TeamResponse, 'ok' | 'message'>
    & { team?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name' | 'ownerId'>
    )> }
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'ok' | 'message'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )> }
  ) }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UsersResponse' }
    & Pick<UsersResponse, 'ok' | 'message'>
    & { users?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>> }
  ) }
);


export const LogoutDocument = gql`
    mutation Logout {
  logout {
    ok
    message
  }
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!) {
  register(email: $email) {
    ok
    message
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const VerifyUserDocument = gql`
    mutation VerifyUser($digit: Float!) {
  verifyUser(digit: $digit) {
    ok
    message
  }
}
    `;
export type VerifyUserMutationFn = ApolloReactCommon.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      digit: // value for 'digit'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        return ApolloReactHooks.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, baseOptions);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = ApolloReactCommon.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const ChannelsDocument = gql`
    query Channels($teamId: String!) {
  channels(teamId: $teamId) {
    ok
    message
    channels {
      name
    }
  }
}
    `;

/**
 * __useChannelsQuery__
 *
 * To run a query within a React component, call `useChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsQuery({
 *   variables: {
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useChannelsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
        return ApolloReactHooks.useQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, baseOptions);
      }
export function useChannelsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, baseOptions);
        }
export type ChannelsQueryHookResult = ReturnType<typeof useChannelsQuery>;
export type ChannelsLazyQueryHookResult = ReturnType<typeof useChannelsLazyQuery>;
export type ChannelsQueryResult = ApolloReactCommon.QueryResult<ChannelsQuery, ChannelsQueryVariables>;
export const CreateChannelDocument = gql`
    mutation CreateChannel($name: String!, $teamId: String!) {
  createChannel(name: $name, teamId: $teamId) {
    ok
    message
    channel {
      name
    }
  }
}
    `;
export type CreateChannelMutationFn = ApolloReactCommon.MutationFunction<CreateChannelMutation, CreateChannelMutationVariables>;

/**
 * __useCreateChannelMutation__
 *
 * To run a mutation, you first call `useCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChannelMutation, { data, loading, error }] = useCreateChannelMutation({
 *   variables: {
 *      name: // value for 'name'
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useCreateChannelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateChannelMutation, CreateChannelMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateChannelMutation, CreateChannelMutationVariables>(CreateChannelDocument, baseOptions);
      }
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = ApolloReactCommon.MutationResult<CreateChannelMutation>;
export type CreateChannelMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateChannelMutation, CreateChannelMutationVariables>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($name: String!, $avatarBackground: String!) {
  createTeam(name: $name, avatarBackground: $avatarBackground) {
    ok
    message
    team {
      id
      name
      avatarBackground
    }
  }
}
    `;
export type CreateTeamMutationFn = ApolloReactCommon.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      name: // value for 'name'
 *      avatarBackground: // value for 'avatarBackground'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, baseOptions);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = ApolloReactCommon.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
export const MyTeamsDocument = gql`
    query MyTeams {
  myTeams {
    ok
    message
    teams {
      id
      name
      avatarBackground
    }
  }
}
    `;

/**
 * __useMyTeamsQuery__
 *
 * To run a query within a React component, call `useMyTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyTeamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyTeamsQuery, MyTeamsQueryVariables>) {
        return ApolloReactHooks.useQuery<MyTeamsQuery, MyTeamsQueryVariables>(MyTeamsDocument, baseOptions);
      }
export function useMyTeamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyTeamsQuery, MyTeamsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyTeamsQuery, MyTeamsQueryVariables>(MyTeamsDocument, baseOptions);
        }
export type MyTeamsQueryHookResult = ReturnType<typeof useMyTeamsQuery>;
export type MyTeamsLazyQueryHookResult = ReturnType<typeof useMyTeamsLazyQuery>;
export type MyTeamsQueryResult = ApolloReactCommon.QueryResult<MyTeamsQuery, MyTeamsQueryVariables>;
export const TeamDocument = gql`
    query Team($teamId: String!) {
  team(teamId: $teamId) {
    ok
    message
    team {
      id
      name
      ownerId
    }
  }
}
    `;

/**
 * __useTeamQuery__
 *
 * To run a query within a React component, call `useTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamQuery({
 *   variables: {
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useTeamQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TeamQuery, TeamQueryVariables>) {
        return ApolloReactHooks.useQuery<TeamQuery, TeamQueryVariables>(TeamDocument, baseOptions);
      }
export function useTeamLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TeamQuery, TeamQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TeamQuery, TeamQueryVariables>(TeamDocument, baseOptions);
        }
export type TeamQueryHookResult = ReturnType<typeof useTeamQuery>;
export type TeamLazyQueryHookResult = ReturnType<typeof useTeamLazyQuery>;
export type TeamQueryResult = ApolloReactCommon.QueryResult<TeamQuery, TeamQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ok
    message
    user {
      id
      username
      email
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    ok
    message
    users {
      id
      username
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;