import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    html {
        box-sizing: inherit;
        /* overflow: hidden; */
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        color: #3e3e3e;
        font-family: 'SlackLato-Regular';
        box-sizing: inherit;
        height: 100%;
    }

    [contenteditable] {
        padding: 1px;

    }

    [data-placeholder]:empty:before {
     content: attr(data-placeholder);
     padding: 0px;
     color: #888;
    }
`;
