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