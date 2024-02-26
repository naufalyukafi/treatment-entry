const variantOrange = {
  borderOrange: ({ colorMode }) => ({
    icon: {
      color: colorMode === 'dark' ? 'carenow-black' : 'white',
    },
    control: {
      border: '1px',
      borderColor: colorMode === 'light' ? 'carenow-orange' : 'carenow-orange',
      _checked: {
        bg: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
        borderColor: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
      },
    },
  }),
};

const Checkbox = {
  baseStyle: ({ colorMode }) => ({
    icon: {
      color: colorMode === 'dark' ? 'carenow-black' : 'white',
    },
    control: {
      border: '1px',
      borderColor:
        colorMode === 'light' ? 'carenow-neutral-6' : 'carenow-neutral-7',
      _checked: {
        bg: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
        borderColor: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
      },
    },
  }),
  variants: {
    ...variantOrange,
  },
};

export default Checkbox;
