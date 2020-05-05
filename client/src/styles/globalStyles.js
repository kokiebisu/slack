import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    }
`;
