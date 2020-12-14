import React, { useState } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

// Queries
import { useVerifyUserInviteQuery } from "generated/graphql";

// Blocks
import * as b from "global/blocks";

import { Dialog } from "components/atoms/dialog/dialog.component";

// Utils
import { Input } from "components/atoms/input/input.component";

import { fullNameRegex, weakRegex } from "util/passwordUtil";
import { randomColor } from "util/randomColor";
import { profile } from "global/colors";
import { useCreateUserInviteMutation } from "generated/graphql";

import { Button } from "components/atoms/button/button.component";

export const InvitedAuth: React.FC<{}> = () => {
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
    <div>
      {token && VerifyUserInvite?.verifyUserInvite.ok ? (
        <Redirect to={`/client/${VerifyUserInvite?.verifyUserInvite.teamId}`} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createAccount();
          }}
        >
          {[
            {
              value: "fullname",
              variant: "plain",
            },
            { value: "password", variant: "password" },
          ].map((params, index) => (
            <b.Box key={index}>
              <Input invite info={info} setInfo={setInfo} {...params} />
            </b.Box>
          ))}
          <Dialog variant="error" error={errorLog} />
          <b.Box mt={3}>
            <Button variant="confirm" block />
          </b.Box>
        </form>
      )}
    </div>
  );
};
