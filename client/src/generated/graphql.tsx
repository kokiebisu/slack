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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type ChannelMember = {
  __typename?: 'ChannelMember';
  userId: Scalars['Float'];
  channelId: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  memberId: Scalars['Float'];
  channelId: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
};


export type Channel = {
  __typename?: 'Channel';
  id: Scalars['String'];
  name: Scalars['String'];
  isPublic: Scalars['Boolean'];
  teamId: Scalars['String'];
  topic?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  avatarBackground: Scalars['String'];
};

export type Member = {
  __typename?: 'Member';
  teamId: Scalars['String'];
  userId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  fullname: Scalars['String'];
  email: Scalars['String'];
  avatarBackground: Scalars['String'];
};

export type BaseResponse = {
  __typename?: 'BaseResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
};

export type AuthorizationResponse = {
  __typename?: 'AuthorizationResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
};

export type ChannelWithFullName = {
  __typename?: 'ChannelWithFullName';
  id: Scalars['String'];
  name: Scalars['String'];
  isPublic: Scalars['Boolean'];
  teamId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  topic: Scalars['String'];
  fullname: Scalars['String'];
};

export type ChannelWithFullNameResponse = {
  __typename?: 'ChannelWithFullNameResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  channel?: Maybe<ChannelWithFullName>;
};

export type ChannelResponse = {
  __typename?: 'ChannelResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
};

export type ChannelsResponse = {
  __typename?: 'ChannelsResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  channels?: Maybe<Array<Channel>>;
};

export type BelongingTeams = {
  __typename?: 'BelongingTeams';
  id: Scalars['String'];
  name: Scalars['String'];
  avatarBackground: Scalars['String'];
};

export type BelongingTeamsResponse = {
  __typename?: 'BelongingTeamsResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  belongingTeams?: Maybe<Array<BelongingTeams>>;
};

export type BelongingUsers = {
  __typename?: 'BelongingUsers';
  id: Scalars['String'];
  userId: Scalars['Float'];
  channelId: Scalars['String'];
};

export type BelongingUsersResponse = {
  __typename?: 'BelongingUsersResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  belongingUsers?: Maybe<Array<BelongingUsers>>;
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  message?: Maybe<Message>;
};

export type DisplayingMessage = {
  __typename?: 'DisplayingMessage';
  id: Scalars['Float'];
  fullname: Scalars['String'];
  body: Scalars['String'];
  avatarBackground: Scalars['String'];
  createdAt: Scalars['String'];
};

export type TeamResponse = {
  __typename?: 'TeamResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
};

export type TeamsResponse = {
  __typename?: 'TeamsResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Team>>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  ok: Scalars['Boolean'];
  errorlog?: Maybe<Scalars['String']>;
  users?: Maybe<Array<User>>;
};

export type Query = {
  __typename?: 'Query';
  checkEmail: AuthorizationResponse;
  verifyUserByToken: AuthorizationResponse;
  verifyUserInvite: AuthorizationResponse;
  verifyUserExistence: AuthorizationResponse;
  getChannelById: ChannelWithFullNameResponse;
  channels: ChannelsResponse;
  getBelongingTeams: BelongingTeamsResponse;
  getBelongingUsers: BelongingUsersResponse;
  fetchMessages: Array<DisplayingMessage>;
  myTeams: TeamsResponse;
  team: TeamResponse;
  teams: TeamsResponse;
  me: UserResponse;
  users: UsersResponse;
};


export type QueryCheckEmailArgs = {
  email: Scalars['String'];
};


export type QueryVerifyUserByTokenArgs = {
  token: Scalars['String'];
};


export type QueryVerifyUserInviteArgs = {
  token: Scalars['String'];
};


export type QueryVerifyUserExistenceArgs = {
  name: Scalars['String'];
  teamId: Scalars['String'];
  email: Scalars['String'];
};


export type QueryGetChannelByIdArgs = {
  channelId: Scalars['String'];
};


export type QueryChannelsArgs = {
  teamId: Scalars['String'];
};


export type QueryGetBelongingUsersArgs = {
  channelId: Scalars['String'];
};


export type QueryFetchMessagesArgs = {
  channelId: Scalars['String'];
};


export type QueryTeamArgs = {
  teamId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  sendInvitation: BaseResponse;
  logout: AuthorizationResponse;
  register: AuthorizationResponse;
  verifyUserByDigit: AuthorizationResponse;
  createChannel: ChannelResponse;
  sendMessage: DisplayingMessage;
  createTeam: TeamResponse;
  removeTeam: TeamResponse;
  removeUser: BaseResponse;
};


export type MutationSendInvitationArgs = {
  teamId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  avatarBackground: Scalars['String'];
  password: Scalars['String'];
  fullname: Scalars['String'];
  email: Scalars['String'];
};


export type MutationVerifyUserByDigitArgs = {
  digit: Scalars['Float'];
};


export type MutationCreateChannelArgs = {
  description?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  teamId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationSendMessageArgs = {
  body: Scalars['String'];
  teamId: Scalars['String'];
  channelId: Scalars['String'];
};


export type MutationCreateTeamArgs = {
  avatarBackground: Scalars['String'];
  name: Scalars['String'];
};


export type MutationRemoveTeamArgs = {
  teamId: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  userId: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToMessages: DisplayingMessage;
};


export type SubscriptionSubscribeToMessagesArgs = {
  channelID: Scalars['String'];
};

export type CheckEmailQueryVariables = {
  email: Scalars['String'];
};


export type CheckEmailQuery = (
  { __typename?: 'Query' }
  & { checkEmail: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'errorlog'>
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'errorlog'>
  ) }
);

export type RegisterMutationVariables = {
  fullname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  avatarBackground: Scalars['String'];
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'errorlog'>
  ) }
);

export type SendInvitationMutationVariables = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
};


export type SendInvitationMutation = (
  { __typename?: 'Mutation' }
  & { sendInvitation: (
    { __typename?: 'BaseResponse' }
    & Pick<BaseResponse, 'ok' | 'errorlog'>
  ) }
);

export type VerifyUserByDigitMutationVariables = {
  digit: Scalars['Float'];
};


export type VerifyUserByDigitMutation = (
  { __typename?: 'Mutation' }
  & { verifyUserByDigit: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'errorlog'>
  ) }
);

export type VerifyUserByTokenQueryVariables = {
  token: Scalars['String'];
};


export type VerifyUserByTokenQuery = (
  { __typename?: 'Query' }
  & { verifyUserByToken: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'errorlog'>
  ) }
);

export type VerifyUserExistenceQueryVariables = {
  email: Scalars['String'];
  teamId: Scalars['String'];
  name: Scalars['String'];
};


export type VerifyUserExistenceQuery = (
  { __typename?: 'Query' }
  & { verifyUserExistence: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok' | 'errorlog'>
  ) }
);

export type VerifyUserInviteQueryVariables = {
  token: Scalars['String'];
};


export type VerifyUserInviteQuery = (
  { __typename?: 'Query' }
  & { verifyUserInvite: (
    { __typename?: 'AuthorizationResponse' }
    & Pick<AuthorizationResponse, 'ok'>
  ) }
);

export type GetChannelByIdQueryVariables = {
  channelId: Scalars['String'];
};


export type GetChannelByIdQuery = (
  { __typename?: 'Query' }
  & { getChannelById: (
    { __typename?: 'ChannelWithFullNameResponse' }
    & Pick<ChannelWithFullNameResponse, 'ok' | 'errorlog'>
    & { channel?: Maybe<(
      { __typename?: 'ChannelWithFullName' }
      & Pick<ChannelWithFullName, 'id' | 'name' | 'topic' | 'isPublic' | 'fullname' | 'description' | 'createdAt'>
    )> }
  ) }
);

export type ChannelsQueryVariables = {
  teamId: Scalars['String'];
};


export type ChannelsQuery = (
  { __typename?: 'Query' }
  & { channels: (
    { __typename?: 'ChannelsResponse' }
    & Pick<ChannelsResponse, 'ok' | 'errorlog'>
    & { channels?: Maybe<Array<(
      { __typename?: 'Channel' }
      & Pick<Channel, 'id' | 'name' | 'isPublic'>
    )>> }
  ) }
);

export type CreateChannelMutationVariables = {
  name: Scalars['String'];
  teamId: Scalars['String'];
  isPublic: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
};


export type CreateChannelMutation = (
  { __typename?: 'Mutation' }
  & { createChannel: (
    { __typename?: 'ChannelResponse' }
    & Pick<ChannelResponse, 'ok'>
  ) }
);

export type GetBelongingTeamsQueryVariables = {};


export type GetBelongingTeamsQuery = (
  { __typename?: 'Query' }
  & { getBelongingTeams: (
    { __typename?: 'BelongingTeamsResponse' }
    & Pick<BelongingTeamsResponse, 'ok' | 'errorlog'>
    & { belongingTeams?: Maybe<Array<(
      { __typename?: 'BelongingTeams' }
      & Pick<BelongingTeams, 'id' | 'name' | 'avatarBackground'>
    )>> }
  ) }
);

export type GetBelongingUsersQueryVariables = {
  channelId: Scalars['String'];
};


export type GetBelongingUsersQuery = (
  { __typename?: 'Query' }
  & { getBelongingUsers: (
    { __typename?: 'BelongingUsersResponse' }
    & Pick<BelongingUsersResponse, 'ok' | 'errorlog'>
    & { belongingUsers?: Maybe<Array<(
      { __typename?: 'BelongingUsers' }
      & Pick<BelongingUsers, 'id' | 'userId' | 'channelId'>
    )>> }
  ) }
);

export type FetchMessagesQueryVariables = {
  channelId: Scalars['String'];
};


export type FetchMessagesQuery = (
  { __typename?: 'Query' }
  & { fetchMessages: Array<(
    { __typename?: 'DisplayingMessage' }
    & Pick<DisplayingMessage, 'id' | 'fullname' | 'body' | 'avatarBackground' | 'createdAt'>
  )> }
);

export type SendMessageMutationVariables = {
  channelId: Scalars['String'];
  teamId: Scalars['String'];
  body: Scalars['String'];
};


export type SendMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendMessage: (
    { __typename?: 'DisplayingMessage' }
    & Pick<DisplayingMessage, 'id' | 'fullname' | 'body' | 'avatarBackground'>
  ) }
);

export type SubscribeToMessagesSubscriptionVariables = {
  channelID: Scalars['String'];
};


export type SubscribeToMessagesSubscription = (
  { __typename?: 'Subscription' }
  & { subscribeToMessages: (
    { __typename?: 'DisplayingMessage' }
    & Pick<DisplayingMessage, 'id' | 'fullname' | 'body' | 'avatarBackground' | 'createdAt'>
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
    & Pick<TeamResponse, 'ok' | 'errorlog'>
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
    & Pick<TeamsResponse, 'ok' | 'errorlog'>
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
    & Pick<TeamResponse, 'ok' | 'errorlog'>
    & { team?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'name'>
    )> }
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'ok' | 'errorlog'>
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
    & Pick<UsersResponse, 'ok' | 'errorlog'>
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
    errorlog
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
    errorlog
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
    mutation Register($fullname: String!, $email: String!, $password: String!, $avatarBackground: String!) {
  register(email: $email, password: $password, fullname: $fullname, avatarBackground: $avatarBackground) {
    ok
    errorlog
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
 *      avatarBackground: // value for 'avatarBackground'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SendInvitationDocument = gql`
    mutation SendInvitation($email: String!, $name: String, $teamId: String!) {
  sendInvitation(email: $email, name: $name, teamId: $teamId) {
    ok
    errorlog
  }
}
    `;
export type SendInvitationMutationFn = ApolloReactCommon.MutationFunction<SendInvitationMutation, SendInvitationMutationVariables>;

/**
 * __useSendInvitationMutation__
 *
 * To run a mutation, you first call `useSendInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendInvitationMutation, { data, loading, error }] = useSendInvitationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useSendInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendInvitationMutation, SendInvitationMutationVariables>) {
        return ApolloReactHooks.useMutation<SendInvitationMutation, SendInvitationMutationVariables>(SendInvitationDocument, baseOptions);
      }
export type SendInvitationMutationHookResult = ReturnType<typeof useSendInvitationMutation>;
export type SendInvitationMutationResult = ApolloReactCommon.MutationResult<SendInvitationMutation>;
export type SendInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<SendInvitationMutation, SendInvitationMutationVariables>;
export const VerifyUserByDigitDocument = gql`
    mutation VerifyUserByDigit($digit: Float!) {
  verifyUserByDigit(digit: $digit) {
    ok
    errorlog
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
export const VerifyUserByTokenDocument = gql`
    query VerifyUserByToken($token: String!) {
  verifyUserByToken(token: $token) {
    ok
    errorlog
  }
}
    `;

/**
 * __useVerifyUserByTokenQuery__
 *
 * To run a query within a React component, call `useVerifyUserByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyUserByTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyUserByTokenQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VerifyUserByTokenQuery, VerifyUserByTokenQueryVariables>) {
        return ApolloReactHooks.useQuery<VerifyUserByTokenQuery, VerifyUserByTokenQueryVariables>(VerifyUserByTokenDocument, baseOptions);
      }
export function useVerifyUserByTokenLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VerifyUserByTokenQuery, VerifyUserByTokenQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VerifyUserByTokenQuery, VerifyUserByTokenQueryVariables>(VerifyUserByTokenDocument, baseOptions);
        }
export type VerifyUserByTokenQueryHookResult = ReturnType<typeof useVerifyUserByTokenQuery>;
export type VerifyUserByTokenLazyQueryHookResult = ReturnType<typeof useVerifyUserByTokenLazyQuery>;
export type VerifyUserByTokenQueryResult = ApolloReactCommon.QueryResult<VerifyUserByTokenQuery, VerifyUserByTokenQueryVariables>;
export const VerifyUserExistenceDocument = gql`
    query VerifyUserExistence($email: String!, $teamId: String!, $name: String!) {
  verifyUserExistence(email: $email, teamId: $teamId, name: $name) {
    ok
    errorlog
  }
}
    `;

/**
 * __useVerifyUserExistenceQuery__
 *
 * To run a query within a React component, call `useVerifyUserExistenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserExistenceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyUserExistenceQuery({
 *   variables: {
 *      email: // value for 'email'
 *      teamId: // value for 'teamId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useVerifyUserExistenceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VerifyUserExistenceQuery, VerifyUserExistenceQueryVariables>) {
        return ApolloReactHooks.useQuery<VerifyUserExistenceQuery, VerifyUserExistenceQueryVariables>(VerifyUserExistenceDocument, baseOptions);
      }
export function useVerifyUserExistenceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VerifyUserExistenceQuery, VerifyUserExistenceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VerifyUserExistenceQuery, VerifyUserExistenceQueryVariables>(VerifyUserExistenceDocument, baseOptions);
        }
export type VerifyUserExistenceQueryHookResult = ReturnType<typeof useVerifyUserExistenceQuery>;
export type VerifyUserExistenceLazyQueryHookResult = ReturnType<typeof useVerifyUserExistenceLazyQuery>;
export type VerifyUserExistenceQueryResult = ApolloReactCommon.QueryResult<VerifyUserExistenceQuery, VerifyUserExistenceQueryVariables>;
export const VerifyUserInviteDocument = gql`
    query VerifyUserInvite($token: String!) {
  verifyUserInvite(token: $token) {
    ok
  }
}
    `;

/**
 * __useVerifyUserInviteQuery__
 *
 * To run a query within a React component, call `useVerifyUserInviteQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserInviteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyUserInviteQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyUserInviteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VerifyUserInviteQuery, VerifyUserInviteQueryVariables>) {
        return ApolloReactHooks.useQuery<VerifyUserInviteQuery, VerifyUserInviteQueryVariables>(VerifyUserInviteDocument, baseOptions);
      }
export function useVerifyUserInviteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VerifyUserInviteQuery, VerifyUserInviteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VerifyUserInviteQuery, VerifyUserInviteQueryVariables>(VerifyUserInviteDocument, baseOptions);
        }
export type VerifyUserInviteQueryHookResult = ReturnType<typeof useVerifyUserInviteQuery>;
export type VerifyUserInviteLazyQueryHookResult = ReturnType<typeof useVerifyUserInviteLazyQuery>;
export type VerifyUserInviteQueryResult = ApolloReactCommon.QueryResult<VerifyUserInviteQuery, VerifyUserInviteQueryVariables>;
export const GetChannelByIdDocument = gql`
    query GetChannelById($channelId: String!) {
  getChannelById(channelId: $channelId) {
    ok
    errorlog
    channel {
      id
      name
      topic
      isPublic
      fullname
      description
      createdAt
    }
  }
}
    `;

/**
 * __useGetChannelByIdQuery__
 *
 * To run a query within a React component, call `useGetChannelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelByIdQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useGetChannelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetChannelByIdQuery, GetChannelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetChannelByIdQuery, GetChannelByIdQueryVariables>(GetChannelByIdDocument, baseOptions);
      }
export function useGetChannelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetChannelByIdQuery, GetChannelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetChannelByIdQuery, GetChannelByIdQueryVariables>(GetChannelByIdDocument, baseOptions);
        }
export type GetChannelByIdQueryHookResult = ReturnType<typeof useGetChannelByIdQuery>;
export type GetChannelByIdLazyQueryHookResult = ReturnType<typeof useGetChannelByIdLazyQuery>;
export type GetChannelByIdQueryResult = ApolloReactCommon.QueryResult<GetChannelByIdQuery, GetChannelByIdQueryVariables>;
export const ChannelsDocument = gql`
    query Channels($teamId: String!) {
  channels(teamId: $teamId) {
    ok
    errorlog
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
    mutation CreateChannel($name: String!, $teamId: String!, $isPublic: Boolean!, $description: String, $topic: String) {
  createChannel(name: $name, teamId: $teamId, description: $description, topic: $topic, isPublic: $isPublic) {
    ok
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
 *      isPublic: // value for 'isPublic'
 *      description: // value for 'description'
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useCreateChannelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateChannelMutation, CreateChannelMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateChannelMutation, CreateChannelMutationVariables>(CreateChannelDocument, baseOptions);
      }
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = ApolloReactCommon.MutationResult<CreateChannelMutation>;
export type CreateChannelMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateChannelMutation, CreateChannelMutationVariables>;
export const GetBelongingTeamsDocument = gql`
    query GetBelongingTeams {
  getBelongingTeams {
    ok
    errorlog
    belongingTeams {
      id
      name
      avatarBackground
    }
  }
}
    `;

/**
 * __useGetBelongingTeamsQuery__
 *
 * To run a query within a React component, call `useGetBelongingTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBelongingTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBelongingTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBelongingTeamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBelongingTeamsQuery, GetBelongingTeamsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBelongingTeamsQuery, GetBelongingTeamsQueryVariables>(GetBelongingTeamsDocument, baseOptions);
      }
export function useGetBelongingTeamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBelongingTeamsQuery, GetBelongingTeamsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBelongingTeamsQuery, GetBelongingTeamsQueryVariables>(GetBelongingTeamsDocument, baseOptions);
        }
export type GetBelongingTeamsQueryHookResult = ReturnType<typeof useGetBelongingTeamsQuery>;
export type GetBelongingTeamsLazyQueryHookResult = ReturnType<typeof useGetBelongingTeamsLazyQuery>;
export type GetBelongingTeamsQueryResult = ApolloReactCommon.QueryResult<GetBelongingTeamsQuery, GetBelongingTeamsQueryVariables>;
export const GetBelongingUsersDocument = gql`
    query GetBelongingUsers($channelId: String!) {
  getBelongingUsers(channelId: $channelId) {
    ok
    errorlog
    belongingUsers {
      id
      userId
      channelId
    }
  }
}
    `;

/**
 * __useGetBelongingUsersQuery__
 *
 * To run a query within a React component, call `useGetBelongingUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBelongingUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBelongingUsersQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useGetBelongingUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBelongingUsersQuery, GetBelongingUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBelongingUsersQuery, GetBelongingUsersQueryVariables>(GetBelongingUsersDocument, baseOptions);
      }
export function useGetBelongingUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBelongingUsersQuery, GetBelongingUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBelongingUsersQuery, GetBelongingUsersQueryVariables>(GetBelongingUsersDocument, baseOptions);
        }
export type GetBelongingUsersQueryHookResult = ReturnType<typeof useGetBelongingUsersQuery>;
export type GetBelongingUsersLazyQueryHookResult = ReturnType<typeof useGetBelongingUsersLazyQuery>;
export type GetBelongingUsersQueryResult = ApolloReactCommon.QueryResult<GetBelongingUsersQuery, GetBelongingUsersQueryVariables>;
export const FetchMessagesDocument = gql`
    query FetchMessages($channelId: String!) {
  fetchMessages(channelId: $channelId) {
    id
    fullname
    body
    avatarBackground
    createdAt
  }
}
    `;

/**
 * __useFetchMessagesQuery__
 *
 * To run a query within a React component, call `useFetchMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMessagesQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useFetchMessagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchMessagesQuery, FetchMessagesQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchMessagesQuery, FetchMessagesQueryVariables>(FetchMessagesDocument, baseOptions);
      }
export function useFetchMessagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchMessagesQuery, FetchMessagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchMessagesQuery, FetchMessagesQueryVariables>(FetchMessagesDocument, baseOptions);
        }
export type FetchMessagesQueryHookResult = ReturnType<typeof useFetchMessagesQuery>;
export type FetchMessagesLazyQueryHookResult = ReturnType<typeof useFetchMessagesLazyQuery>;
export type FetchMessagesQueryResult = ApolloReactCommon.QueryResult<FetchMessagesQuery, FetchMessagesQueryVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($channelId: String!, $teamId: String!, $body: String!) {
  sendMessage(channelId: $channelId, body: $body, teamId: $teamId) {
    id
    fullname
    body
    avatarBackground
  }
}
    `;
export type SendMessageMutationFn = ApolloReactCommon.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      teamId: // value for 'teamId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return ApolloReactHooks.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = ApolloReactCommon.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const SubscribeToMessagesDocument = gql`
    subscription SubscribeToMessages($channelID: String!) {
  subscribeToMessages(channelID: $channelID) {
    id
    fullname
    body
    avatarBackground
    createdAt
  }
}
    `;

/**
 * __useSubscribeToMessagesSubscription__
 *
 * To run a query within a React component, call `useSubscribeToMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToMessagesSubscription({
 *   variables: {
 *      channelID: // value for 'channelID'
 *   },
 * });
 */
export function useSubscribeToMessagesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SubscribeToMessagesSubscription, SubscribeToMessagesSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SubscribeToMessagesSubscription, SubscribeToMessagesSubscriptionVariables>(SubscribeToMessagesDocument, baseOptions);
      }
export type SubscribeToMessagesSubscriptionHookResult = ReturnType<typeof useSubscribeToMessagesSubscription>;
export type SubscribeToMessagesSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToMessagesSubscription>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($name: String!, $avatarBackground: String!) {
  createTeam(name: $name, avatarBackground: $avatarBackground) {
    ok
    errorlog
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
    errorlog
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
    errorlog
    team {
      name
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
    errorlog
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
    errorlog
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