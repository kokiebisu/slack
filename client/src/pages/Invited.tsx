import React, { useState } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

// Queries
import { useVerifyUserInviteQuery } from "generated/graphql";

// Blocks
import * as b from "global/blocks";

// Components
import { Layout } from "components/layout/layout.component";

// Styles
import { Wrapper } from "styles/Invited";
import { Bar } from "components/atoms/bar/bar.component";
import { Dialog } from "components/atoms/dialog/dialog.component";

// Utils
import { Input } from "components/atoms/input/input.component";

import { fullNameRegex, weakRegex } from "util/passwordUtil";
import { randomColor } from "util/randomColor";
import { profile } from "global/colors";
import { useCreateUserInviteMutation } from "generated/graphql";
import { Card } from "components/molecules/card/card.component";
import { Button } from "components/atoms/button/button.component";

type State = {
  fullname: string;
  password: string;
  errorlog: boolean;
  loading: boolean;
};
type Action =
  | { type: "add_fullname"; payload: string }
  | { type: "add_password"; payload: string }
  | { type: "add_errorlog"; payload: string }
  | { type: "loading"; payload: string };

const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add_fullname":
      return { ...state, fullname: action.payload };
    case "add_password":
      return { ...state, password: action.payload };
    case "add_errorlog":
      return { ...state, errorlog: action.payload };
    case "loading":
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export const Invited = () => {
  const { invitorId, token } = useParams();
  const { data: VerifyUserInvite } = useVerifyUserInviteQuery({
    variables: { token, invitorId },
  });
  const history = useHistory();

  const [info, setInfo] = useState({
    fullname: "",
    password: "",
  });
  const [errorLog, setErrorLog] = useState("");
  const [loading, setLoading] = useState(false);

  const [create] = useCreateUserInviteMutation();

  const displayError = (phrase: string) => {
    setErrorLog(phrase);
    setTimeout(() => {
      setErrorLog("");
    }, 5000);
  };

  const createAccount = async () => {
    if (!info.fullname) {
      displayError("Whoops! You forgot your name!");
      return;
    }

    if (!info.password) {
      displayError("Password field is empty");
      return;
    }

    if (!info.fullname.match(fullNameRegex)) {
      displayError("I want your full name! Not your nickname!");
      return;
    }

    if (!info.password.match(weakRegex)) {
      displayError("The password is not 6 characters! Give it another try!");
      return;
    }

    const avatarBackground = randomColor(profile);

    const response = await create({
      variables: {
        token,
        invitorId,
        name: info.fullname,
        password: info.password,
        avatarBackground,
      },
    });

    if (response && response.data && response.data.createUserInvite.ok) {
      history.push({
        pathname: `/client/${response.data.createUserInvite.teamId}`,
      });
    }
    if (!response?.data?.createUserInvite.ok) {
      setErrorLog(response?.data?.createUserInvite!.errorlog as string);
    }
  };

  return (
    <>
      {token && (
        <>
          {VerifyUserInvite?.verifyUserInvite.ok ? (
            <Redirect
              to={`/client/${VerifyUserInvite?.verifyUserInvite.teamId}`}
            />
          ) : (
            <Layout variant="center">
              <b.Box py={4}>
                <b.Flex flexDirection="column" alignItems="center">
                  <Wrapper>
                    <b.Box>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          createAccount();
                        }}
                      >
                        <b.Box>
                          <b.Text
                            fontSize={48}
                            color="black__light"
                            fontFamily="Larsseit-Bold"
                            textAlign="center"
                          >
                            First, create your account
                          </b.Text>
                        </b.Box>
                        {[{ value: "fullname" }, { value: "password" }].map(
                          (params, index) => (
                            <b.Box key={index}>
                              <Input
                                variant="plain"
                                invite
                                info={info}
                                setInfo={setInfo}
                                {...params}
                              />
                            </b.Box>
                          )
                        )}
                        <Bar variant="validation" password={info.password} />
                        <Dialog variant="password" password={info.password} />
                        <Dialog variant="error" error={errorLog} />
                        <b.Box>
                          <Button variant="confirm" />
                          <Card variant="policy" />
                        </b.Box>
                      </form>
                    </b.Box>
                  </Wrapper>
                </b.Flex>
              </b.Box>
            </Layout>
          )}
        </>
      )}
    </>
  );
};
