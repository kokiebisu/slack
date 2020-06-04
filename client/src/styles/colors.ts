interface ThemeProps {
  [key: string]: { [key: string]: string };
}

interface AvatarBackgroundProps {
  [key: string]: string;
}

const fontSizes = {};

export const main: ThemeProps = {
  colors: {
    white: '#FFFFFF',
    white__dark: '#F8F8F8',
    primary: '#3F0F40',
    primary__dark: '#350D36',
    blue: '#005A9D',
    black__light: '#272626',
    black: '#000000',
  },
  fontSizes,
};

export const avatar: AvatarBackgroundProps = {
  oldlavendar: '#776885',
  tyrianpurple: '#5F1A37',
  lapislazuli: '#33658A',
  chineseyello: '#F6AE2D',
  orangepantone: '#F26419',
  pansypurple: '#70163C',
  amazon: '#307351',
  darksienna: '#2E0F15',
  electricindigo: '#5E2BFF',
  phlox: '#C04CFD',
  cyclamen: '#FC6DAB',
  bluepantone: '#0D21A1',
  riflegreen: '#4A5240',
  twilightlavendar: '#824670',
  bittersweet: '#FF6B6B',
  crimson: '#D72638',
  lightgreen: '#8FF7A7',
  mayablue: '#51BBFE',
};
