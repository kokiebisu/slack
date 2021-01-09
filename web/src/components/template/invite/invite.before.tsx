import { useContext } from "react";
import * as b from "../../../global/blocks";

import styled, { ThemeContext } from "styled-components";
import { GoogleLogo } from "../../../assets/svg/Logo";
import { UserPlus, Close, PaperPlaneLight } from "../../../assets/svg";
import { PlusCircle } from "../../../assets/svg";
import { useSendInvitationMutation } from "../../../generated/graphql";
import { useParams } from "react-router-dom";
import { Dialog } from "../../atoms/dialog/dialog.component";

interface Props {
  dispatchToggle: any;
  input: any;
  dispatchInput: any;
  finish: any;
  send: any;
}

export const BeforeInvite: React.FC<Props> = ({
  dispatchToggle,
  input,
  dispatchInput,
  finish,
}) => {
  const { teamId } = useParams();
  const theme = useContext(ThemeContext);

  const [send] = useSendInvitationMutation();

  return (
    <>
      <Header>
        <b.Flex justifyContent="space-between">
          <Title>
            <b.Text>Invite people to dsaf</b.Text>
          </Title>
          <IconButtonWrapper
            className="close"
            onClick={() => dispatchToggle({ type: "toggle_invite" })}
          >
            <Close />
          </IconButtonWrapper>
        </b.Flex>
      </Header>
      <PricingPlans py={3} px={3}>
        <b.Flex>
          <IconWrapper className="user-plus">
            <UserPlus />
          </IconWrapper>
          <b.Box>
            <b.Text>
              Workspaces with paid plans can also invite <span>guests</span>,
              like contractors, vendors, or clients.{" "}
              <a href="/pricing">See pricing plans</a>
            </b.Text>
          </b.Box>
        </b.Flex>
      </PricingPlans>
      {input.error && <Dialog variant="error" error={input.error} />}
      <EmailInputs>
        <b.Box>
          <b.Flex>
            <EmailInputHeader>
              <b.Text>Email Address</b.Text>
            </EmailInputHeader>
            <EmailInputHeader>
              <b.Text>Name (optional)</b.Text>
            </EmailInputHeader>
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex>
            <StyledInput>
              <input
                value={input.email}
                placeholder="name@example.com"
                onChange={(e) =>
                  addInput({ type: "add_email", payload: e.target.value })
                }
              />
            </StyledInput>
            <StyledInput>
              <input
                value={input.name}
                placeholder="Optional"
                onChange={(e) =>
                  addInput({ type: "add_name", payload: e.target.value })
                }
              />
            </StyledInput>
          </b.Flex>
        </b.Box>
      </EmailInputs>
      <AddOptions>
        <b.Box>
          <b.Flex alignItems="center">
            <IconWrapper className="plus-circle" mr={2}>
              <PlusCircle />
            </IconWrapper>
            <AddOptionText>
              <b.Text>
                <span onClick={() => console.log("add another")}>
                  Add another
                </span>{" "}
                or{" "}
                <span onClick={() => console.log("add google directory")}>
                  add many at once
                </span>
              </b.Text>
            </AddOptionText>
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex alignItems="center">
            <IconWrapper className="google" mr={2}>
              <GoogleLogo />
            </IconWrapper>
            <AddOptionText>
              <b.Text>
                <span>Add from Google Directory</span>
              </b.Text>
            </AddOptionText>
          </b.Flex>
        </b.Box>
      </AddOptions>
      <div>
        <b.Box mb={2}>
          <b.Text fontSize={14} fontFamily="SlackLato-Bold">
            Default Channels
          </b.Text>
        </b.Box>
        <b.Box width={1} mb={2}>
          <input
            style={{
              width: "100%",
              padding: "7px 3px",
              borderRadius: 4,
              border: `1px solid ${theme.colors.gray__light}`,
            }}
          />
        </b.Box>
        <b.Box mb={4}>
          <b.Text
            fontSize={14}
            fontFamily="SlackLato-Regular"
            color={theme.colors.gray__light}
          >
            New <b.Span fontFamily="SlackLato-Bold">members</b.Span> will
            automatically join these channels and #general{" "}
            <b.Span fontFamily="SlackLato-Bold">change defaults</b.Span>
          </b.Text>
        </b.Box>
        <b.Box>
          <b.Flex>
            <b.Box mr={1}>
              {/* <Link width={14} height={14} fill={theme.colors.blue__light} /> */}
            </b.Box>
            <b.Box>
              <b.Text
                fontSize={14}
                fontFamily="SlackLato-Regular"
                color={theme.colors.blue__light}
              >
                Share invite link
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
      </div>
      <Footer>
        <b.Flex alignItems="center" justifyContent="space-between">
          <b.Box>
            <b.Flex>
              <IconWrapper className="paper-plane" mr={2}>
                <PaperPlaneLight />
              </IconWrapper>
              <b.Box>
                <b.Text>See past invites</b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
          <SendButton
            onClick={async () => {
              if (!input.email || !input.name || !teamId) {
                dispatchInput({
                  type: "give_error",
                  payload:
                    "Add at least one email address before sending invitations.",
                });
                return;
              }
              const response = await send({
                variables: { email: input.email, name: input.name, teamId },
              });

              if (response.data?.sendInvitation.errorlog) {
                console.log("there was an error");
              }
              finish();
            }}
          >
            Send Invitations
          </SendButton>
        </b.Flex>
      </Footer>
    </>
  );
};

const StyledInput = styled(b.Box)`
  width: 50%;
  padding-right: 7px;
  & > input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray__light};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.gray};
    padding: 7px 0 7px 6px;
  }
`;

const Header = styled(b.Box)`
  margin-bottom: 20px;
`;

const Title = styled(b.Box)`
  & > p {
    font-family: "SlackLato-Black";
    font-size: 22px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const IconWrapper = styled(b.Box)`
  &.user-plus {
    & svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.plus-circle {
    & svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }

  &.google {
    & svg {
      width: 18px;
      height: 18px;
    }
  }

  &.paper-plane {
    & svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

const IconButtonWrapper = styled(b.Button)`
  position: relative;
  &.close {
    width: 35px;
    height: 35px;
    svg {
      position: relative;
      top: 2px;
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }

    &:hover {
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.white__dark};
    }
  }
  &.info {
    top: 1.5px;
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

const PricingPlans = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.blue__0};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.blue__light};
  margin-bottom: 15px;

  & p {
    font-family: "SlackLato-Regular";
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
    & > span {
      font-family: "SlackLato-Bold";
    }

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blue__light};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const EmailInputs = styled(b.Box)`
  width: 100%;
  margin-bottom: 20px;

  & > div {
    width: 100%;

    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

const EmailInputHeader = styled(b.Box)`
  width: 50%;
  & > p {
    font-size: 15px;
    font-family: "SlackLato-Bold";
  }
`;

const AddOptions = styled(b.Box)`
  margin-bottom: 25px;
  & > div {
    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

const AddOptionText = styled(b.Box)`
  position: relative;
  bottom: 1px;
  & > p {
    font-size: 14px;
    font-family: "SlackLato-Regular";

    & span {
      color: ${({ theme }) => theme.colors.blue__light};
    }
  }
`;

const Footer = styled(b.Box)`
  margin-top: 60px;

  & p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

const SendButton = styled(b.Button)`
  background-color: ${({ theme }) => theme.colors.green};
  padding: 10px 12px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-family: "SlackLato-Bold";
  font-size: 15px;
`;
