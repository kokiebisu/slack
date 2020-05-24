import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    html {
        box-sizing: inherit;
    }

    body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: #3e3e3e;
    font-family: 'CircularStd-Book';
    box-sizing: inherit;
    }
    
`;
