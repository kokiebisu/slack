import { createGlobalStyle } from 'styled-components';

// Fonts
import CircularBook from '../assets/fonts/Circular-Book.ttf';
import CircularMedium from '../assets/fonts/Circular-Medium.ttf';
import CircularStdBook from '../assets/fonts/CircularStd-Book.ttf';
import CircularStdMedium from '../assets/fonts/CircularStd-Medium.ttf';
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf';
import KeepCalmMedium from '../assets/fonts/KeepCalm-Medium.ttf';

export const GlobalFonts = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap');

    @font-face {
        font-family: 'CircularBook';
        font-style: normal;
        font-weight: normal;
        src: url(${CircularBook});
    }

    @font-face {
        font-family: 'CircularMedium';
        font-style: normal;
        font-weight: normal;
        src: url(${CircularMedium});
    }

    @font-face {
        font-family: 'CircularStd-Book';
        font-style: normal;
        font-weight: normal;
        src: url(${CircularStdBook});
    }

    @font-face {
        font-family: 'CircularStd-Medium';
        font-style: normal;
        font-weight: normal;
        src: url(${CircularStdMedium});
    }

    @font-face {
        font-family: 'OpenSans-Bold';
        font-style: normal;
        font-weight: normal;
        src: url(${OpenSansBold});
    }

    @font-face {
        font-family: 'KeepCalm-Medium';
        font-style: normal;
        font-weight: normal;
        src: url(${KeepCalmMedium});
    }
`;
