/**
 * Criterias
 * The string must contain at least 1 lowercase alphabetical character
 * The string must contain at least 1 uppercase alphabetical character
 * The string must contain at least 1 numeric character
 * The string must contain at least one special character
 * The string must be eight characters or longer
 */
export const veryStrongRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})'
);

/**
 * Criterias
 * The string must contain at least 1 lowercase alphabet
 * The string must container at least 1 uppercase alphabet
 * The string must container at least 1 numeric character
 * The string must be six characters or longer
 */
export const strongRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})'
);

/**
 * Criterias
 * The string must contain at least 1 lowercase alphabet
 * The string must be six characters or longer
 */
export const mediumRegex = RegExp('^(?=.*[a-z])(?=.{6,})');

/**
 * Criterias
 * The string must be six characters or longer
 */
export const weakRegex = RegExp('^(?=.{6,})');

export const fullNameRegex = RegExp(
  /^[a-zA-Z]([-']?[a-z]+)*( [a-zA-Z]([-']?[a-z]+)*)+$/
);

export const emailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

/**
 * Displays the password security based on the match
 */
export const textValidation = (password: string) => {
  if (
    password.match(weakRegex) &&
    password.match(mediumRegex) &&
    password.match(strongRegex) &&
    password.match(veryStrongRegex)
  ) {
    return 'Great';
  } else if (
    password.match(weakRegex) &&
    password.match(mediumRegex) &&
    password.match(strongRegex)
  ) {
    return 'Good';
  } else if (password.match(weakRegex) && password.match(mediumRegex)) {
    return 'Soso';
  } else if (password.match(weakRegex)) {
    return 'Weak';
  } else {
    return 'Not valid';
  }
};
