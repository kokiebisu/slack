// interface Props {
//   rest: {
//     backgroundColor: string;
//     transition: {
//       duration: number;
//       type: string;
//       ease: string;
//     };
//   };
//   hovered: {
//     backgroundColor: string;
//     transition: {
//       duration: number;
//       type: string;
//       ease: string;
//     };
//   };
// }

export const ButtonMotion = {
  rest: {
    backgroundColor: '#612069',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hovered: {
    backgroundColor: '#18071A',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const TransparentButtonMotion = {
  rest: {
    borderWidth: 1,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeOut',
    },
  },
  hovered: {
    borderWidth: 2,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const launchMotion = {
  rest: {
    backgroundColor: '#612069',
    transition: {
      duration: 0.2,
    },
  },
  hovered: {
    backgroundColor: '#18071A',
    transition: {
      duration: 0.2,
    },
  },
};
