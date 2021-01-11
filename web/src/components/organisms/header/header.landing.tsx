import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { useToggleDispatch } from "../../../context/toggle-context";

import * as b from "../../../global/blocks";
import { size } from "../../../global/sizes";

import { NameLogo } from "../../../assets/svg/Logo";

import { Button } from "../../atoms/button";
import { Modal } from "../modal";
import { useHistory } from "react-router";

export const LandingHeader: React.FC<{}> = () => {
  const history = useHistory();
  const [pressed, setPressed] = useState(false);
  const dispatchToggle = useToggleDispatch();

  // const { data: meData } = useMeQuery();
  // const { data: teamsData, loading } = useMyTeamsQuery();
  return (
    <div>
      <b.Box py={3}>
        <b.Flex alignItems="center" justifyContent="space-between">
          <b.Box width={1}>
            <b.Flex alignItems="center">
              <b.Box mr={3}>
                <NameLogo width={110} />
              </b.Box>
              <Options>
                <div>
                  <Button variant="nav" nav="why" />
                </div>
                <div>
                  <Button variant="nav" nav="solutions" />
                </div>
                <div>
                  <Button variant="nav" nav="resources" />
                </div>
              </Options>
            </b.Flex>
          </b.Box>

          {/* <div>
            <Button
              variant="primary"
              size="sm"
              title="Launch"
              onPress={() => setPressed(!pressed)}
            />
          </div> */}

          <div>
            <Normal>
              <b.Flex alignItems="center">
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    title="Sign in"
                    to="/signin"
                  />
                </div>
              </b.Flex>
            </Normal>
            <Mobile>
              <Button
                variant="hamburger"
                onPress={() => dispatchToggle({ type: "toggle_landing" })}
              />
            </Mobile>
          </div>
        </b.Flex>
      </b.Box>
      {/* {pressed && teamsData ? (
        <LaunchWrapper>
          <Modal variant="launch" teams={teamsData} />
        </LaunchWrapper>
      ) : null} */}
    </div>
  );
};

const Normal = styled.div`
  display: none;
  @media ${size.sm} {
    display: block;
  }
`;

const Mobile = styled.div`
  display: block;
  @media ${size.sm} {
    display: none;
  }
`;

const LaunchWrapper = styled(b.Box)`
  display: none;

  @media ${size.md} {
    display: block;
    position: absolute;
    top: 80px;
    right: calc(5%);
    border-radius: 3px;
  }
`;

const Options = styled(b.Flex)`
  display: none;
  @media ${size.sm} {
    display: flex;
  }
`;
