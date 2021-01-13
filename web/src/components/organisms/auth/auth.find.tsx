import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Input } from "components/atoms/input";
import * as b from "global/blocks";
import { emailRegex } from "util/passwordUtil";
import { Dialog } from "components/atoms/dialog";
import { Button } from "components/atoms/button";

export const FindAuth: React.FC<{}> = () => {
  // const [check, { data }] = useCheckEmailLazyQuery();
  const [info, setInfo] = useState({
    email: "",
  });
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // check({ variables: { email: info.email } });
        }}
      >
        <b.Box my={2}>
          <Input
            variant="plain"
            setInfo={setInfo}
            info={info}
            value="email"
            placeholder="name@work-email.com"
            criteria={info.email?.match(emailRegex)}
          />
        </b.Box>

        <b.Box height={35} my={2}>
          {/* {data?.checkEmail && (
            <b.Box>
              <Dialog variant="error" />
            </b.Box>
          )} */}
        </b.Box>
        <b.Box>
          <Button variant="confirm" loading={false} block />
        </b.Box>
      </form>
    </div>
  );
};
