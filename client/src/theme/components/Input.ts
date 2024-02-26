const sizeMd = {
  md: {
    field: {
      fontSize: 'sm',
    },
    addon: {
      fontSize: 'sm',
    },
  },
};

const sizeLg = {
  lg: {
    field: {
      fontSize: 'md',
    },
    addon: {
      fontSize: 'md',
    },
  },
};

const variantOutline = {
  outline: () => ({
    field: {
      borderColor: 'carenow-neutral-6',
      _hover: {
        borderColor:
          'carenow-neutral-6',
      },
      _focus: {
        boxShadow: 'outline-input',
        borderColor: 'carenow-main-2',
      },
      _invalid: {
        bg: 'red.50',
      },
    },
  }),
};

const variantFilled = {
  filled: () => ({
    field: {
      borderColor: '#D3D3D3',
      padding: 4,
      rounded: 4,
      bg: '#fff',
      _focus: {
        bg: 'carenow-neutral-2',
      },
      _hover: {
        bg: 'carenow-neutral-2',
      },
    },
  }),
};

const variantOutlineDark = {
  'outline-dark': {
    field: {
      bg: 'transparent',
      shadow: 'carenow-dark',
      '> option, > optgroup': { color: 'black' },
      borderWidth: 1,
      borderColor: 'transparent',
      _focus: { borderColor: 'carenow-orange' },
    },
  },
};

const variantOutlineDarkAlt = {
  'outline-dark-alt': {
    field: {
      ...variantOutlineDark['outline-dark'].field,
      borderColor: 'carenow-dark-text',
    },
  },
};

const variantFilledDark = {
  'filled-dark': {
    field: {
      bg: 'carenow-dark',
      color: 'carenow-dark-text',
    },
  },
};

const Input = {
  sizes: {
    ...sizeMd,
    ...sizeLg,
  },
  variants: {
    ...variantOutline,
    ...variantOutlineDark,
    ...variantOutlineDarkAlt,
    ...variantFilled,
    ...variantFilledDark,
  },
};

export default Input;
