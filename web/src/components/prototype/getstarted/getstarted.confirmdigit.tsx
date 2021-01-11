import { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";

// Components
import * as b from "global/blocks";
import { Layout } from "components/layout/layout.component";
import { Button } from "components/atoms/button";

import {
  LoadingText,
  Rotate,
  spinTransition,
} from "styles/ConfirmDigit/Dialog";
import { Warning } from "assets/svg";

export const ConfirmDigitGetStarted: React.FC<{}> = () => {
  const input_1: any = useRef(null);
  const input_2: any = useRef(null);
  const input_3: any = useRef(null);
  const input_4: any = useRef(null);
  const input_5: any = useRef(null);
  const input_6: any = useRef(null);
  const formRef = useRef(null);

  const history = useHistory();
  const [error, setError] = useState("");

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");
  const [sixth, setSixth] = useState("");

  const location: any = useLocation();

  useEffect(() => {
    if (first && second && third && fourth && fifth && sixth) {
      sendQuery();
    }
  }, [first, second, third, fourth, fifth, sixth]);

  const sendQuery = async () => {
    try {
      const newDigit = parseInt(
        `${first}${second}${third}${fourth}${fifth}${sixth}`,
        10
      );
    } catch (err) {
      setError("something went awfully wrong");
    }
  };

  const theme = useContext(ThemeContext);

  return (
    <div>
      <b.Box mb={5}>
        <form
          ref={formRef}
          onSubmit={() => {
            console.log(`${first}`);
          }}
        >
          <b.Box>
            <b.Flex justifyContent="center">
              <b.Box>
                <b.Flex>
                  <b.Box>
                    <TextInput
                      type="text"
                      className={first !== "" ? `added input_1` : `input_1`}
                      ref={input_1}
                      maxLength={1}
                      onChange={(e: any) => {
                        setFirst(e.target?.value);
                        input_2.current!.focus();
                      }}
                    />
                  </b.Box>
                  <b.Box>
                    <TextInput
                      className={second !== "" ? `added input_2` : `input_2`}
                      ref={input_2}
                      maxLength={1}
                      onChange={(e: any) => {
                        setSecond(e.target?.value);
                        input_3.current!.focus();
                      }}
                    />
                  </b.Box>
                  <b.Box>
                    <TextInput
                      className={third !== "" ? `added input_3` : `input_3`}
                      ref={input_3}
                      maxLength={1}
                      onChange={(e: any) => {
                        setThird(e.target?.value);
                        input_4.current!.focus();
                      }}
                    />
                  </b.Box>
                </b.Flex>
              </b.Box>
              <b.Box mx={3}>
                <b.Flex alignItems="center">
                  <b.Box>
                    <b.Text fontFamily="SlackLato-Thin" fontSize={32}>
                      -
                    </b.Text>
                  </b.Box>
                </b.Flex>
              </b.Box>
              <b.Box>
                <b.Flex>
                  <b.Box>
                    <TextInput
                      className={fourth !== "" ? `added input_4` : `input_4`}
                      ref={input_4}
                      maxLength={1}
                      onChange={(e: any) => {
                        setFourth(e.target?.value);
                        input_5.current!.focus();
                      }}
                    />
                  </b.Box>
                  <b.Box>
                    <TextInput
                      className={fifth !== "" ? `added input_5` : `input_5`}
                      ref={input_5}
                      maxLength={1}
                      onChange={(e: any) => {
                        setFifth(e.target?.value);

                        input_6.current!.focus();
                      }}
                    />
                  </b.Box>
                  <b.Box>
                    <TextInput
                      className={sixth !== "" ? `added input_6` : `input_6`}
                      ref={input_6}
                      maxLength={1}
                      onChange={(e: any) => {
                        setSixth(e.target?.value);
                      }}
                    />
                  </b.Box>
                </b.Flex>
              </b.Box>
            </b.Flex>
          </b.Box>
        </form>
      </b.Box>
      <b.Flex justifyContent="Center">
        <b.Box>
          <b.Flex justifyContent="center">
            <b.Box mx={3}>
              <Button variant="email" type="gmail"></Button>
            </b.Box>
            <b.Box mx={3}>
              <Button variant="email" type="outlook"></Button>
            </b.Box>
          </b.Flex>
          <b.Box>
            <b.Text>Can’t find your code? Check your spam folder!</b.Text>
          </b.Box>
        </b.Box>
      </b.Flex>
    </div>
  );
};

const TextInput = styled.input`
  font-size: 56px;
  width: 80px;
  padding: 15px 0 15px 37px;
  border: 0.5px solid gray;
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  &.added {
    padding: 15px 0 15px 23px;
  }

  &.input_1 {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_2 {
    border-top: 0.5px solid gray;
    border-left: none;

    &:focus {
      border-left: 0.5px solid gray;
    }
  }

  &.input_3 {
    border-top: 0.5px solid gray;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &.input_4 {
    border-top: 0.5px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_5 {
    border-top: 0.5px solid gray;
    border-left: none;
    &:focus {
      border-left: 0.5px solid gray;
    }
  }

  &.input_6 {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
  }
`;
