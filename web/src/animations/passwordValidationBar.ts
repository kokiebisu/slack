import { main } from 'global/colors';

export const validationVariant = {
  satisfied: {
    backgroundColor: main.colors.blue,
    transition: {
      duration: 0.5,
    },
  },
  unsatisfied: {
    backgroundColor: main.colors.gray__lighter,
    transition: {
      duration: 0.5,
    },
  },
};
