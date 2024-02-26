const variantLine = {
  line: ({ colorMode }) => ({
    tablist: {
      bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
      borderBottom: '0',
    },
    tab: {
      py: '4',
      mb: '0',
      fontFamily: 'button',
      fontWeight: 'bold',
      fontSize: 'sm',
      border: '0',
      _active: {
        bg: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
      },
      _selected: {
        bg: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
        color: colorMode === 'dark' ? 'carenow-black' : 'white',
        border: '0',
      },
    },
  }),
};

const variantLineAlt = {
  'line-alt': ({ colorMode }) => ({
    tablist: {
      borderBottom: '1px',
      borderBottomColor:
        colorMode === 'light' ? 'carenow-neutral-6' : 'carenow-neutral-7',
    },
    tab: {
      py: '4',
      mb: '0',
      fontFamily: 'button',
      fontWeight: 'bold',
      fontSize: 'sm',
      border: '0',
      bg: colorMode === 'dark' ? 'carenow-dark' : 'carenow-neutral-5',
      _active: {
        bg: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
      },
      _selected: {
        bg: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
        color: colorMode === 'dark' ? 'carenow-black' : 'white',
        border: '0',
      },
      _first: {
        roundedLeft: 'md',
      },
      _last: {
        roundedRight: 'md',
      },
    },
  }),
};

const variantLinedBottom = {
  'lined-bottom': ({ colorMode }) => ({
    tablist: {
      color: colorMode === 'dark' ? '#FFFFFF80' : '#12121280',
      borderBottom:
        colorMode === 'dark' ? 'carenow-orange' : 'carenow-dark-light-2',
      borderBottomWidth: '3px',
    },
    tab: {
      py: '4',
      mb: '0',
      fontFamily: 'button',
      fontWeight: 'bold',
      fontSize: 'sm',
      border: '0',
      _active: {
        bg: colorMode === 'dark' ? 'carenow-orange' : 'carenow-main-2',
      },
      _selected: {
        color: colorMode === 'dark' ? 'white' : 'carenow-black',
        borderBottom: colorMode === 'dark' ? 'white' : 'carenow-dark',
        borderBottomWidth: '3px',
      },
    },
  }),
};

const variantLinedBottomAlt = {
  'lined-bottom-alt': {
    tablist: {
      borderBottom: 'carenow-dark-light-2',
      borderBottomWidth: '2px',
    },
    tab: {
      px: 0,
      fontSize: 'sm',
      fontFamily: 'button',
      ml: '4',
      borderBottom: '2px',
      borderBottomColor: 'transparent',
      _first: {
        ml: '0',
      },
      _selected: {
        borderBottomColor: 'carenow-main',
      },
    },
    tabpanel: {
      px: '0',
    },
  },
};

const variantLineDefault = {
  linedDefault: ({ colorMode }) => ({
    tablist: {
      color: colorMode === 'dark' ? '#FFFFFF80' : '#000',
      borderBottomWidth: '1px',
    },
    tab: {
      mb: '0',
      fontFamily: 'button',
      fontWeight: 'bold',
      fontSize: 'sm',
      _selected: {
        color: colorMode === 'dark' ? 'white' : 'carenow-main',
        borderBottomWidth: '3px',
        borderBottomColor:
          colorMode === 'dark' ? 'carenow-orange' : 'carenow-main',
      },
    },
  }),
};

const variantSideLine = {
  sideLine: ({ colorMode }) => ({
    tab: {
      fontFamily: 'button',
      fontWeight: 'bold',
      fontSize: 'sm',
      _selected: {
        color: colorMode === 'dark' ? 'white' : 'carenow-main',
        bg: 'rgba(42, 107, 132, 0.07)',
        borderStartWidth: '4px',
        borderStartColor: colorMode === 'dark' ? 'white' : 'carenow-main',
      },
    },
  }),
};

const variantDefault = {
  default: ({ colorMode }) => ({
    tablist: {
      color: colorMode === 'dark' ? '#FFFFFF80' : '#000',
    },
    tab: {
      mb: '0',
      fontFamily: 'button',
      fontWeight: 'bold',
      fontSize: 'sm',
      _selected: {
        color: colorMode === 'dark' ? 'white' : 'carenow-main',
        borderBottomColor: colorMode === 'dark' ? 'white' : 'carenow-main',
      },
    },
  }),
};

const variantDark = {
  dark: {
    tablist: {
      bg: 'carenow-dark',
    },
    tab: {
      fontFamily: 'button',
      fontSize: 'sm',
      _selected: {
        bg: 'carenow-orange',
        color: 'black',
        py: '4',
      },
    },
  },
};

const Tabs = {
  variants: {
    ...variantLine,
    ...variantDark,
    ...variantLinedBottom,
    ...variantLinedBottomAlt,
    ...variantLineAlt,
    ...variantLineDefault,
    ...variantDefault,
    ...variantSideLine,
  },
};

export default Tabs;
