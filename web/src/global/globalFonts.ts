import { createGlobalStyle } from "styled-components";
import {
  CircularProBook,
  CircularProBold,
  LarsseitBold,
  SlackLatoLight,
  SlackLatoRegular,
  SlackLatoBold,
  SlackLatoBlack,
  SlackIcons,
} from "../assets/fonts";

export const GlobalFonts = createGlobalStyle`

    /* Landing */
    @font-face {
        font-family: 'CircularPro-Book';
        src: url(${CircularProBook});
    }

    @font-face {
        font-family: 'CircularPro-Bold';
        src: url(${CircularProBold});
    }

    @font-face {
        font-family: 'Larsseit-Bold';
        src: url(${LarsseitBold});
    }

    /* Client */
    @font-face {
        font-family: 'SlackLato-Light';
        src: url(${SlackLatoLight});
    }

    @font-face {
        font-family: 'SlackLato-Regular';
        src: url(${SlackLatoRegular});
    }

    @font-face {
        font-family: 'SlackLato-Bold';
        src: url(${SlackLatoBold})
    }

    @font-face {
        font-family: 'SlackLato-Black';
        src: url(${SlackLatoBlack})
    }

    @font-face {
        font-family: 'SlackIcons';
        src: url(${SlackIcons});
    }
`;
