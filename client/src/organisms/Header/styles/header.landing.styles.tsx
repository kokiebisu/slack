import { css } from 'styled-components';

export const landingHeaderStyles = {
  wrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  left: css`
    display: flex;
    align-items: center;
    & > div:first-child {
      margin-right: 10px;
    }
  `,
  itemwrapper: css`
    margin: 0 10px;
    display: none;
    @media (min-width: 500px) {
      display: block;
    }
  `,
  right: css`
    display: flex;
    align-items: center;
  `,
  signupwrapper: css`
    margin-right: 25px;
    display: none;
    @media (min-width: 500px) {
      display: block;
    }
  `,
  launchwrapper: css`
    display: none;
    @media (min-width: 500px) {
      display: block;
    }
  `,
  iconwrapper: css`
    display: block;
    @media (min-width: 500px) {
      display: none;
    }
  `,
};
