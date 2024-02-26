const variantDark = {
  dark: {
    dialog: {
      bg: 'carenow-dark',
      color: 'white',
      p: 5,
    },
    header: {
      fontFamily: 'heading',
    },
  },
};

const Modal = {
  baseStyle: ({ colorMode }) => ({
    dialog: {
      bg: colorMode === 'dark' ? 'carenow-black' : 'white',
    },
    header: {
      fontFamily: 'heading',
    },
  }),
  variants: {
    ...variantDark,
  },
};

export default Modal;
