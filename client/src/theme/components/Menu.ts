const variantDark = {
  dark: {
    list: {
      bg: 'carenow-black',
      borderColor: 'carenow-orange',
    },
    item: {
      _focus: {
        bg: 'carenow-dark',
      },
      _hover: {
        bg: 'carenow-dark',
      },
    },
  },
};

const Menu = {
  baseStyle: ({ colorMode }) => ({
    list: {
      bg: colorMode === 'dark' ? 'carenow-black' : 'white',
      borderColor: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
    },
    item: {
      _focus: {
        bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
      },
      _hover: {
        bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
      },
    },
  }),
  variants: {
    ...variantDark,
  },
};

export default Menu;
