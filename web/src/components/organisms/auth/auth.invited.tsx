import React, { useState } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

// Blocks
import * as b from "global/blocks";

import { Dialog } from "components/atoms/dialog";

// Utils
import { Input } from "components/atoms/input";

import { fullNameRegex, weakRegex } from "util/passwordUtil";
import { randomColor } from "util/randomColor";
import { profile } from "global/colors";

import { Button } from "components/atoms/button";

export const InvitedAuth: React.FC<{}> = () => {
  const { invitorId, token } = useParams<{
    invitorId: string;
    token: string;
  }>();

  const history = useHistory();

  const [info, setInfo] = useState({
    fullname: "",
    password: "",
  });
  const [errorLog, setErrorLog] = useState("");
  const [loading, setLoading] = useState(false);

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
  };

  return (
    <div>
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
    </div>
  );
};
