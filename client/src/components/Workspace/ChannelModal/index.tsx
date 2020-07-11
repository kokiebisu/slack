import * as React from 'react';
import { useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';

// Blocks
import * as b from '../../../styles/blocks';

// Svgs
import { Close, Info } from '../../../assets/svg';
import { ThinHashTag } from '../../../assets/svg/HashTag';

// Styles
import {
  Wrapper,
  Title,
  Container,
  Header,
  IconButtonWrapper,
  Description,
  SectionHeader,
  StyledInput,
  Hint,
  PrivateOption,
  LearnMore,
  LearnButton,
  NameWrapper,
} from './index.styles';

// Components
import { Switch } from './switch';

// Query
import { useCreateChannelMutation } from '../../../generated/graphql';

// Context
import { useToggleDispatch } from '../../../context/toggle-context';

type State = { name: string; description: string };
type Action =
  | { type: 'add_name'; payload: string }
  | { type: 'add_description'; payload: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_name':
      return { ...state, name: action.payload };
    case 'add_description':
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

interface Props {}

export const ChannelModal: React.FC<Props> = () => {
  const dispatchToggle = useToggleDispatch();

  const [error, setError] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [input, dispatchInput] = useReducer(reducer, {
    name: '',
    description: '',
  });
  const { teamId } = useParams();
  const [create] = useCreateChannelMutation();

  const handleSubmit = async () => {
    if (!input.name || !input.description) {
      setError('Something is wrong');
      return;
    }

    const response = await create({
      variables: {
        name: input.name,
        teamId,
        description: input.description,
        isPublic: !isPrivate,
      },
    });
    if (response.data?.createChannel.ok) {
      dispatchToggle({ type: 'toggle_channel' });
    }
  };

  return (
    <Wrapper>
      <b.Flex justifyContent='center' alignItems='center'>
        <Container animate={{ y: 0 }} initial={{ y: 15 }}>
          <Header>
            <b.Flex justifyContent='space-between'>
              <Title>
                {isPrivate ? (
                  <b.Text>Create a private channel</b.Text>
                ) : (
                  <b.Text>Create a channel</b.Text>
                )}
              </Title>
              <IconButtonWrapper
                className='close'
                onClick={() => dispatchToggle({ type: 'toggle_channel' })}>
                <Close />
              </IconButtonWrapper>
            </b.Flex>
          </Header>
          <Description>
            <b.Text>
              Channels are where your team communicates. They’re best when
              organized around a topic — #marketing, for example.
            </b.Text>
          </Description>
          <SectionHeader>
            <b.Text>Name</b.Text>
          </SectionHeader>
          <NameWrapper>
            <b.Box>
              <ThinHashTag />
            </b.Box>
            <StyledInput
              onChange={(e) =>
                dispatchInput({ type: 'add_name', payload: e.target.value })
              }
              value={input.name}
              placeholder='e.g. plan-budget'
              className='name'
            />
          </NameWrapper>
          {error && (
            <b.Box>
              <b.Text>{error}</b.Text>
            </b.Box>
          )}
          <SectionHeader>
            <b.Text>Description (optional)</b.Text>
          </SectionHeader>
          <b.Box>
            <StyledInput
              onChange={(e) =>
                dispatchInput({
                  type: 'add_description',
                  payload: e.target.value,
                })
              }
              value={input.description}
              className='description'
            />
          </b.Box>
          <Hint>
            <b.Text>What's this channel about?</b.Text>
          </Hint>
          <PrivateOption>
            <b.Flex alignItems='center' justifyContent='space-between'>
              <b.Box>
                <b.Box className='title'>
                  <b.Text>Make Private</b.Text>
                </b.Box>
                <b.Box className='description'>
                  {isPrivate ? (
                    <b.Text>
                      <b.Span>This can’t be undone.</b.Span> A private channel
                      cannot be made public later on.
                    </b.Text>
                  ) : (
                    <b.Text>
                      When a channel is set to private, it can only be viewed or
                      joined by invitation.
                    </b.Text>
                  )}
                </b.Box>
              </b.Box>
              <b.Box>
                <Switch
                  isOn={isPrivate}
                  switchToggle={() => setIsPrivate((isPrivate) => !isPrivate)}
                />
              </b.Box>
            </b.Flex>
          </PrivateOption>
          <b.Box>
            <b.Flex justifyContent='space-between' alignItems='center'>
              <LearnMore>
                <b.Flex alignItems='center'>
                  <IconButtonWrapper className='info'>
                    <Info />
                  </IconButtonWrapper>
                  <b.Box>
                    <b.Text>Learn more</b.Text>
                  </b.Box>
                </b.Flex>
              </LearnMore>
              <LearnButton onClick={handleSubmit}>Create</LearnButton>
            </b.Flex>
          </b.Box>
        </Container>
      </b.Flex>
    </Wrapper>
  );
};