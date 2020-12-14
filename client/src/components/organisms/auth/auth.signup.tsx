import React, { useState } from "react";
import styled from "styled-components";
import * as b from "global/blocks";
import { Input } from "components/atoms/input/input.component";
import { Dialog } from "components/atoms/dialog/dialog.component";
import { Button } from "components/atoms/button/button.component";
import { useHistory } from "react-router-dom";
import { emailRegex, fullNameRegex, weakRegex } from "util/passwordUtil";
import { randomColor } from "util/randomColor";
import { profile } from "global/colors";
import { useRegisterMutation } from "generated/graphql";

export const SignUpAuth: React.FC<{}> = () => {
  const history = useHistory();
  const [info, setInfo] = useState({
    fullname: "",
    password: "",
    email: "",
  });
  const [errorLog, setErrorLog] = useState("");
  const [loading, setLoading] = useState(false);

  const createAccount = async () => {
    if (!info.fullname) {
      displayError("Whoops! You forgot your name!");
      return;
    }

    if (!info.fullname.match(fullNameRegex)) {
      displayError("I want your full name! Not your nickname!");
      return;
    }

    if (!info.email) {
      displayError("Wait,, you forgot your email!");
      return;
    }

    if (!info.email.match(emailRegex)) {
      displayError("Is this really an email?");
      return;
    }

    if (!info.password.match(weakRegex)) {
      displayError("The password is not 6 characters! Give it another try!");
      return;
    }

    const avatarBackground = randomColor(profile);

    const response = await register({
      variables: {
        email: info.email,
        fullname: info.fullname,
        password: info.password,
        avatarBackground,
      },
    });

    if (response && response.data && response.data.register.ok) {
      history.push({
        pathname: "/create/verifyemail",
        state: info.email,
      });
    }
    if (response && response.data && !response.data.register.ok) {
      setErrorLog(response.data.register!.errorlog as string);
    }
  };

  const [register] = useRegisterMutation();

  const displayError = (phrase: string) => {
    setErrorLog(phrase);
    setTimeout(() => {
      setErrorLog("");
    }, 5000);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createAccount();
      }}
    >
      <div>
        <b.Box mt={3}>
          {[
            {
              value: "fullname",
              variant: "plain",
            },
            {
              value: "email",
              variant: "plain",
            },
            {
              value: "password",
              variant: "password",
            },
          ].map((params, index) => (
            <b.Box my={2} key={index}>
              <Input setInfo={setInfo} info={info} {...params} />
            </b.Box>
          ))}
        </b.Box>
        <div>
          <Dialog variant="error" error={errorLog} />
        </div>
        <div>
          <Button variant="confirm" block />
        </div>
      </div>
    </form>
  );
};
