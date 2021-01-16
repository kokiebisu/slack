import { Button } from "components/atoms/button";
import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const UserMessage: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box>
      <b.Flex>
        <b.Box mr={2}>
          <Button variant="avatar" size={35} />
        </b.Box>
        <b.Box>
          <b.Box>
            <b.Flex alignItems="flex-end">
              <b.Box mr={2}>
                <b.Text
                  fontFamily="SlackLato-Bold"
                  color={theme.colors.black}
                  fontSize={14}
                >
                  Kenichi
                </b.Text>
              </b.Box>
              <b.Box>
                <b.Text color={theme.colors.gray} fontSize={12}>
                  1:53 PM
                </b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
          <b.Box>
            <b.Text fontSize={14} color={theme.colors.gray__light}>
              joined #general.
            </b.Text>
          </b.Box>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
