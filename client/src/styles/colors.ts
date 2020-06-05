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
    primary__light: '#5c2c5d',
    primary__dark: '#350D36',
    blue: '#005A9D',
    purple__light: '#4b6bc6',
    black__light: '#1D1C1D',
    black: '#000000',
    gray: '#636363',
    gray__light: '#7e7e7e',
    gray__lighter: '#d7d7d7',
    gray__dark: '#868686',
    gray__darker: '#272626',
    red: '#A30701',
    pink: '#efa0b7',
    pink__dark: '#e32072',
    pink__light: '#fbebef',
    green: '#227A5A',
    orange__dark: '#de4e2b',
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
