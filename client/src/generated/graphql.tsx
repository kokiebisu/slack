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
  fullname: Scalars['String'];
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
  message: Scalars['String'];
  team?: Maybe<Team>;
};

export type TeamsResponse = {
  __typename?: 'TeamsResponse';
  ok: Scalars['Boolean'];
  message: Scalars['String'];
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
  checkEmail: AuthorizationResponse;
  channels: ChannelsResponse;
  myTeams: TeamsResponse;
  team: TeamResponse;
  teams: TeamsResponse;
  me: UserResponse;
  users: UsersResponse;
};


export type QueryCheckEmailArgs = {
  email: Scalars['String'];
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
  verifyUserByDigit: AuthorizationResponse;
  verifyUserByToken: AuthorizationResponse;
  createChannel: ChannelResponse;
  createTeam: TeamResponse;
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  fullname: Scalars['String'];
  email: Scalars['String'];
};


export type MutationVerifyUserByDigitArgs = {
  digit: Scalars['Float'];
};


export type MutationVerifyUserByTokenArgs = {
  token: Scalars['String'];
};


export type MutationCreateChannelArgs = {
  teamId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateTeamArgs = {
  avatarBackground: Scalars['String'];
  name: Scalars['String'];
};

export type CheckEmailQueryVariables = {
  email: Scalars['String'];
};


export type CheckEmailQuery = (
  { __typename?: 'Query' }
  & { checkEmail: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'message'>
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'message'>
  ) }
);

export type RegisterMutationVariables = {
  fullname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'message'>
  ) }
);

export type VerifyUserByDigitMutationVariables = {
  digit: Scalars['Float'];
};


export type VerifyUserByDigitMutation = (
  { __typename?: 'Mutation' }
  & { verifyUserByDigit: (
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
      & Pick<Channel, 'id' | 'name' | 'isPublic'>
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
      & Pick<User, 'id' | 'fullname' | 'email'>
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
      & Pick<User, 'id' | 'fullname'>
    )>> }
  ) }
);


export const CheckEmailDocument = gql`
    query CheckEmail($email: String!) {
  checkEmail(email: $email) {
    ok
    message
  }
}
    `;

/**
 * __useCheckEmailQuery__
 *
 * To run a query within a React component, call `useCheckEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckEmailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>) {
        return ApolloReactHooks.useQuery<CheckEmailQuery, CheckEmailQueryVariables>(CheckEmailDocument, baseOptions);
      }
export function useCheckEmailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CheckEmailQuery, CheckEmailQueryVariables>(CheckEmailDocument, baseOptions);
        }
export type CheckEmailQueryHookResult = ReturnType<typeof useCheckEmailQuery>;
export type CheckEmailLazyQueryHookResult = ReturnType<typeof useCheckEmailLazyQuery>;
export type CheckEmailQueryResult = ApolloReactCommon.QueryResult<CheckEmailQuery, CheckEmailQueryVariables>;
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
    mutation Register($fullname: String!, $email: String!, $password: String!) {
  register(email: $email, password: $password, fullname: $fullname) {
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
 *      fullname: // value for 'fullname'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const VerifyUserByDigitDocument = gql`
    mutation VerifyUserByDigit($digit: Float!) {
  verifyUserByDigit(digit: $digit) {
    ok
    message
  }
}
    `;
export type VerifyUserByDigitMutationFn = ApolloReactCommon.MutationFunction<VerifyUserByDigitMutation, VerifyUserByDigitMutationVariables>;

/**
 * __useVerifyUserByDigitMutation__
 *
 * To run a mutation, you first call `useVerifyUserByDigitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserByDigitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserByDigitMutation, { data, loading, error }] = useVerifyUserByDigitMutation({
 *   variables: {
 *      digit: // value for 'digit'
 *   },
 * });
 */
export function useVerifyUserByDigitMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserByDigitMutation, VerifyUserByDigitMutationVariables>) {
        return ApolloReactHooks.useMutation<VerifyUserByDigitMutation, VerifyUserByDigitMutationVariables>(VerifyUserByDigitDocument, baseOptions);
      }
export type VerifyUserByDigitMutationHookResult = ReturnType<typeof useVerifyUserByDigitMutation>;
export type VerifyUserByDigitMutationResult = ApolloReactCommon.MutationResult<VerifyUserByDigitMutation>;
export type VerifyUserByDigitMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyUserByDigitMutation, VerifyUserByDigitMutationVariables>;
export const ChannelsDocument = gql`
    query Channels($teamId: String!) {
  channels(teamId: $teamId) {
    ok
    message
    channels {
      id
      name
      isPublic
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
      fullname
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
      fullname
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