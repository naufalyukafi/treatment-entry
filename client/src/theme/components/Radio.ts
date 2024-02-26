const Radio = {
  baseStyle: ({ colorMode }) => ({
    control: {
      _checked: {
        bg: 'transparent',
        borderColor: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
        _hover: {
          bg: 'transparent',
          borderColor:
            colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
        },
        _before: {
          bg: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
        },
      },
    },
  }),
};

export default Radio;
