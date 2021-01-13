import { useContext } from "react";
import { css, ThemeContext } from "styled-components";
import * as b from "global/blocks";
import { Lightening, PaperClip, PaperPlane, Smile } from "assets/svg";

export const TextEditorButton: React.FC<{ type?: string }> = ({
  type = "lightening",
}) => {
  const theme = useContext(ThemeContext);
  const types: { [type: string]: { component: JSX.Element; extends: any } } = {
    lightening: {
      component: <Lightening width={15} height={15} />,
      extends: css`
        fill: ${({ theme }) => theme.colors.gray__light};
        background-color: ${({ theme }) => theme.colors.transparent};
        transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
        :hover {
          fill: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.blue};
        }
      `,
    },
    smile: {
      component: <Smile width={15} height={15} />,
      extends: css`
        transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: ${({ theme }) => theme.colors.transparent};
        fill: ${({ theme }) => theme.colors.gray__light};
        :hover {
          fill: ${({ theme }) => theme.colors.gray__light};
          background-color: ${({ theme }) => theme.colors.white__dark};
        }
      `,
    },
    paperclip: {
      component: <PaperClip width={15} height={15} />,
      extends: css`
        transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: ${({ theme }) => theme.colors.transparent};
        fill: ${({ theme }) => theme.colors.gray__light};
        :hover {
          fill: ${({ theme }) => theme.colors.gray__light};
          background-color: ${({ theme }) => theme.colors.white__dark};
        }
      `,
    },
    paperplane: {
      component: <PaperPlane width={15} height={15} />,
      extends: css`
        background-color: ${({ theme }) => theme.colors.blue};
        fill: ${({ theme }) => theme.colors.white};
      `,
    },
  };
  return (
    <b.Box
      width={32}
      height={32}
      extends={types[type].extends}
      borderRadius={2}
    >
      <b.Flex justifyContent="center" alignItems="center">
        {types[type].component}
      </b.Flex>
    </b.Box>
  );
};
