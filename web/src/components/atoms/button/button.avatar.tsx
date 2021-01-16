import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const AvatarButton: React.FC<{ status?: boolean; size?: number }> = ({
  status = false,
  size = 30,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box position="relative">
      <b.Box bg={theme.colors.blue} width={size} height="100%" borderRadius={5}>
        <b.Img
          borderRadius={5}
          src="https://ca.slack-edge.com/T01JD2ZFHEW-U01JK7TSR52-g47b1f471b71-72"
          alt="avatar"
        />
      </b.Box>
      {status && (
        <b.Box
          position="absolute"
          bottom={-3}
          right={-3}
          border="3px solid"
          borderColor={theme.colors.primary}
          bg={theme.colors.green__lighter}
          width={15}
          height={15}
          borderRadius={9999}
        />
      )}
    </b.Box>
  );
};
