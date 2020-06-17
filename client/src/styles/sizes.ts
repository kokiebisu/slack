// Landing
const landing_size = {
  sm: '768px',
  md: '962px',
  mmd: '1024px',
  lg: '1163px',
  xl: '1280px',
};

// Client
const home_size = {
  md: '850px',
  lg: '1071px',
};

// Signin
const signin_size = {
  sm: '768px',
  md: '831px',
};

const sizes = {
  '9xs': '485px',
  '8xs': '515px',
  '7xs': '550px',
  '6xs': '580px',
  '5xs': '615px',
  '4xs': '645px',
  '3xs': '680px',
  '2xs': '715px',
  xs: '768px',
  sm: '831px',
  md: '962px',
  lg: '1024px',
  llg: '1071px',
  xl: '1163px',
  xxl: '1280px',
};

// Get Started
const getstarted_size = {
  xs: '768px',
};

export const landing = {
  sm: `(min-width: ${landing_size['sm']})`,
  md: `(min-width: ${landing_size['md']})`,
  mmd: `(min-width: ${landing_size['mmd']})`,
  lg: `(min-width: ${landing_size['lg']})`,

  xl: `(min-width: ${landing_size['xl']})`,
};

export const home = {
  md: `(min-width: ${home_size['md']})`,
  lg: `(min-width: ${home_size['lg']})`,
};

export const signin = {
  sm: `(min-width: ${signin_size['sm']})`,
  md: `(min-width: ${signin_size['md']})`,
};

export const getstarted = {
  xs: `(min-width: ${getstarted_size['xs']})`,
};

export const size = {
  '9xs': `(min-width: ${sizes['9xs']})`,
  '8xs': `(min-width: ${sizes['8xs']})`,
  '7xs': `(min-width: ${sizes['7xs']})`,
  '6xs': `(min-width: ${sizes['6xs']})`,
  '5xs': `(min-width: ${sizes['5xs']})`,
  '4xs': `(min-width: ${sizes['4xs']})`,
  '3xs': `(min-width: ${sizes['3xs']})`,
  '2xs': `(min-width: ${sizes['2xs']})`,
  xs: `(min-width: ${sizes['xs']})`,
  sm: `(min-width: ${sizes['sm']})`,
  md: `(min-width: ${sizes['md']})`,
  lg: `(min-width: ${sizes['lg']})`,
  llg: `(min-width: ${sizes['llg']})`,
  xl: `(min-width: ${sizes['xl']})`,
  xxl: `(min-width: ${sizes['xxl']})`,
};
