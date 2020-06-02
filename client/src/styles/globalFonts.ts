import { createGlobalStyle } from 'styled-components';

// Fonts
import CircularProBook from '../assets/fonts/CircularPro-Book.woff2';
import CircularProBold from '../assets/fonts/CircularPro-Bold.woff2';
import LarsseitBold from '../assets/fonts/Larsseit-Bold.woff2';

import SlackLatoLight from '../assets/fonts/SlackLato-Light.woff';
import SlackLatoRegular from '../assets/fonts/SlackLato-Regular.woff';
import SlackLatoBold from '../assets/fonts/SlackLato-Bold.woff';
import SlackLatoBlack from '../assets/fonts/SlackLato-Black.woff2';
import SlackIcons from '../assets/fonts/SlackIcons.woff2';

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
