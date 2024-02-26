const baseStyle = {
  fontFamily: 'Poppins',
};

const sizeLg = {
  lg: {
    fontSize: 'md',
  },
};

const sizesMd = {
  md: {
    fontSize: 'sm',
  },
};

const baseVariantOutline = {
  rounded: 'xl',
  px: '8',
};

const baseVariantOutlineSecond = {
  rounded: '3xl',
  px: '8',
};

const baseVariantSolid = {
  ...baseVariantOutline,
  color: 'white',
};

const variantGhost = {
  ghost: ({ colorMode }) => ({
    _hover: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
    },
    _active: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
    },
  }),
};

const variantLink = {
  link: ({ colorMode }) => ({
    color: colorMode === 'light' ? 'carenow-neutral-4' : 'carenow-dark-text',
    _hover: {
      color: colorMode === 'light' ? 'carenow-black' : 'white',
    },
    _active: {
      color: colorMode === 'light' ? 'carenow-black' : 'white',
    },
  }),
};

const variantLinkDark = {
  'link-dark': {
    p: 0,
    color: 'carenow-dark-text',
    _hover: {
      color: 'carenow-neutral-4',
    },
  },
};

const variantOutline = {
  outline: ({ colorMode }) => ({
    ...baseVariantOutline,
    borderColor: colorMode === 'light' ? 'carenow-main-2' : 'carenow-orange',
    color: colorMode === 'light' ? 'carenow-main-2' : 'carenow-orange',
    _hover: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
      borderColor: colorMode === 'light' ? 'carenow-main' : 'carenow-orange-2',
      color: colorMode === 'light' ? 'carenow-main' : 'carenow-orange-2',
      _disabled: {
        bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
        borderColor:
          colorMode === 'light' ? 'carenow-main-2' : 'carenow-orange-3',
        color: colorMode === 'light' ? 'carenow-main-2' : 'carenow-orange-3',
      },
    },
    _active: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
      borderColor:
        colorMode === 'light' ? 'carenow-main-3' : 'carenow-orange-3',
      color: colorMode === 'light' ? 'carenow-main-3' : 'carenow-orange-3',
    },
    _loading: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
      _hover: {
        borderColor:
          colorMode === 'light' ? 'carenow-main' : 'carenow-orange-3',
        color: colorMode === 'light' ? 'carenow-main' : 'carenow-orange-3',
      },
    },
  }),
};

const variantOutlineText = {
  'outline-text': ({ colorMode }) => ({
    border: '1px',
    borderColor: colorMode === 'light' ? 'carenow-main' : 'white',
    color: 'carenow-main',
    _hover: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
    },
  }),
};

const variantOutlineSecond = {
  outlineSecond: ({ colorMode }) => ({
    ...baseVariantOutlineSecond,
    border: '2px',
    borderColor: colorMode === 'light' ? 'carenow-black' : 'white',
    color: colorMode === 'light' ? 'carenow-black' : 'white',
    _hover: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
      borderColor: colorMode === 'light' ? 'carenow-main' : 'carenow-neutral-2',
      color: colorMode === 'light' ? 'carenow-main' : 'carenow-neutral-2',
    },
    _active: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'white',
      borderColor: colorMode === 'light' ? 'carenow-main-3' : 'white',
      color: colorMode === 'light' ? 'carenow-main-3' : 'carenow-main',
    },
    _loading: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
      _hover: {
        borderColor:
          colorMode === 'light' ? 'carenow-main' : 'carenow-neutral-2',
        color: colorMode === 'light' ? 'carenow-main' : 'carenow-neutral-2',
      },
    },
  }),
};

const variantOutlineDark = {
  'outline-dark': {
    ...baseVariantSolid,
    bg: 'transparent',
    borderWidth: 1,
    borderColor: 'carenow-orange',
    color: 'carenow-orange',
    _hover: {
      borderColor: 'carenow-orange-2',
      color: 'carenow-orange-2',
      _disabled: {
        borderColor: 'carenow-orange-2',
        color: 'carenow-orange-2',
      },
    },
    _active: { borderColor: 'carenow-orange-3', color: 'carenow-orange-3' },
    _loading: {
      _hover: {
        borderColor: 'carenow-orange-2',
        color: 'carenow-orange-2',
      },
    },
  },
};

const variantOutlineDarkSq = {
  'outline-dark-sq': { ...variantOutlineDark['outline-dark'], rounded: 'md' },
};

const variantOutlineDarkSqAlt = {
  'outline-dark-sq-alt': {
    ...variantOutlineDark['outline-dark'],
    rounded: 'md',
    color: 'white',
    borderColor: 'white',
    _hover: {
      color: 'black',
      borderColor: 'carenow-orange-',
      bg: 'carenow-orange-2',
    },
    _active: {
      color: 'black',
      borderColor: 'carenow-orange-3',
      bg: 'carenow-orange-3',
    },
  },
};

const variantOutlineRed = {
  'outline-danger': ({ colorMode }) => ({
    ...baseVariantOutline,
    borderWidth: 1,
    borderColor: 'carenow-red',
    color: 'carenow-red',
    _hover: {
      bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
      borderColor: 'carenow-red-soft',
    },
  }),
};

const variantSolid = {
  solid: ({ colorMode }) => ({
    ...baseVariantSolid,
    bg: colorMode === 'light' ? 'carenow-main-2' : 'carenow-orange',
    color: colorMode === 'light' ? 'white' : 'carenow-black',
    _hover: {
      bg: colorMode === 'light' ? 'carenow-main' : 'carenow-orange-2',
      _disabled: {
        bg: 'carenow-main-2'
      },
    },
    _disabled: {
      bg: 'carenow-main-2',
      color: 'white',
    },
    _active: {
      bg: colorMode === 'light' ? 'carenow-main-3' : 'carenow-orange-3',
    },
    _loading: {
      _hover: {
        bg: colorMode === 'light' ? 'carenow-main' : 'carenow-orange-3',
      },
    },
  }),
};


const variantSolidAlt = {
  'solid-alt': ({ colorMode }) => ({
    ...baseVariantSolid,
    bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
    color: colorMode === 'dark' ? 'white' : 'carenow-black',
    _hover: {
      bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
      _disabled: {
        bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
      },
    },
    _active: {
      bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
    },
    _loading: {
      _hover: {
        bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
      },
    },
  }),
};

const variantSolidGradient = {
  'solid-gradient': {
    ...baseVariantSolid,
    bgGradient: 'linear(to-r, carenow-main, carenow-main-2)',
    _hover: {
      bgGradient: 'linear(to-r, carenow-main, carenow-main-2)',
      _disabled: { bgGradient: 'linear(to-r, carenow-main, carenow-main-2)' },
    },
    _active: { bgGradient: 'linear(to-r, carenow-main, carenow-main-2)' },
    _loading: {
      _hover: {
        bgGradient: 'linear(to-r, carenow-main, carenow-main-2)',
      },
    },
  },
};

const variantSolidDanger = {
  'solid-danger': {
    ...baseVariantSolid,
    color: 'white',
    bg: 'carenow-red',
    _hover: { bg: 'carenow-red' },
    _active: { bg: 'carenow-red' },
    _loading: { _hover: { bg: 'carenow-red' } },
  },
};

const variantSolidSuccess = {
  'solid-success': {
    ...baseVariantSolid,
    color: 'white',
    bg: 'carenow-dark-green',
    _hover: { bg: 'carenow-dark-green' },
    _active: { bg: 'carenow-dark-green' },
    _loading: { _hover: { bg: 'carenow-dark-green' } },
  },
};

const variantSolidLight = {
  'solid-light': {
    ...baseVariantSolid,
    color: 'carenow-main',
    bg: 'white',
    _hover: { bg: 'white' },
    _active: { bg: 'white' },
    _loading: {
      _hover: {
        bg: 'white',
      },
    },
  },
};

const variantSolidLightAlt = {
  'solid-light-alt': {
    ...baseVariantSolid,
    color: 'carenow-main',
    bg: 'white',
    _focus: { shadow: 'outline-light' },
    _hover: { bg: 'white' },
    _active: { bg: 'white' },
    _loading: {
      _hover: {
        bg: 'white',
      },
    },
  },
};

const variantSolidDark = {
  'solid-dark': {
    ...baseVariantSolid,
    bg: 'carenow-orange',
    color: 'carenow-black',
    _hover: { bg: 'carenow-orange-2', _disabled: { bg: 'carenow-orange-2' } },
    _active: { bg: 'carenow-orange-3' },
    _loading: {
      _hover: {
        bg: 'carenow-orange-2',
      },
    },
  },
};

const variantSolidDarkAlt = {
  'solid-dark-alt': {
    ...baseVariantSolid,
    bg: 'carenow-dark',
    color: 'carenow-dark-text',
    _hover: { bg: 'carenow-dark', _disabled: { bg: 'carenow-dark' } },
    _active: { bg: 'carenow-dark' },
    _loading: {
      _hover: {
        bg: 'carenow-dark',
      },
    },
  },
};

const variantSolidDarkSq = {
  'solid-dark-sq': { ...variantSolidDark['solid-dark'], rounded: 'md' },
};

const Button = {
  baseStyle,
  sizes: {
    ...sizeLg,
    ...sizesMd,
  },
  variants: {
    ...variantGhost,
    ...variantLink,
    ...variantLinkDark,
    ...variantOutline,
    ...variantOutlineText,
    ...variantOutlineSecond,
    ...variantOutlineDark,
    ...variantOutlineDarkSq,
    ...variantOutlineDarkSqAlt,
    ...variantOutlineRed,
    ...variantSolid,
    ...variantSolidAlt,
    ...variantSolidGradient,
    ...variantSolidDanger,
    ...variantSolidSuccess,
    ...variantSolidLight,
    ...variantSolidLightAlt,
    ...variantSolidDark,
    ...variantSolidDarkAlt,
    ...variantSolidDarkSq,
  },
};

export default Button;
