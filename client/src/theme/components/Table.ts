const variantSimple = {
  simple: ({ colorMode }) => ({
    th: {
      fontSize: 'lg',
      textTransform: 'capitalize',
      borderBottom: '1px',
      borderBottomColor:
        colorMode === 'light' ? 'carenow-neutral-6' : 'carenow-neutral-7',
      color: colorMode === 'light' ? 'carenow-black' : 'white',
      px: '0',
      pl: '4',
      _first: {
        pl: '0',
      },
    },
    td: {
      borderBottom: '1px',
      borderBottomColor:
        colorMode === 'light' ? 'carenow-neutral-6' : 'carenow-neutral-7',
      px: '0',
      pl: '4',
      _first: {
        pl: '0',
      },
    },
    tbody: {
      tr: {
        _last: {
          td: {
            borderBottom: '0px',
          },
        },
      },
    },
  }),
};

const variantStriped = {
  striped: ({ colorMode }) => ({
    th: {
      fontSize: 'lg',
      textTransform: 'capitalize',
      borderBottom: '1px',
      borderBottomColor:
        colorMode === 'light' ? 'carenow-neutral-6' : 'carenow-neutral-7',
      color: colorMode === 'light' ? 'carenow-black' : 'white',
    },
    td: {
      borderBottom: '1px',
      borderBottomColor:
        colorMode === 'light' ? 'carenow-neutral-6' : 'carenow-neutral-7',
    },
    tbody: {
      tr: {
        '&:nth-of-type(odd)': {
          'th, td': {
            borderBottomWidth: '1px',
            borderColor:
              colorMode === 'light' ? 'carenow-neutral-6' : 'carenow-neutral-7',
          },
          td: {
            bg: colorMode === 'light' ? 'carenow-neutral-5' : 'carenow-dark',
          },
        },
        _last: {
          td: {
            borderBottom: '0px',
          },
        },
      },
    },
  }),
};

const variantDark = {
  dark: {
    th: {
      px: '0',
      fontSize: 'lg',
      textTransform: 'capitalize',
      color: 'white',
      borderBottomWidth: 1,
      borderBottomColor: 'carenow-dark',
      pl: '4',
      _first: {
        pl: '0',
      },
    },
    td: {
      px: '0',
      pl: '4',
      _first: {
        pl: '0',
      },
    },
  },
};

const variantStripedDark = {
  'striped-dark': {
    th: {
      fontSize: 'lg',
      textTransform: 'capitalize',
    },

    tbody: {
      tr: {
        '&:nth-of-type(odd)': {
          td: {
            background: 'carenow-dark',
          },
        },
      },
    },
  },
};

const Table = {
  variants: {
    ...variantSimple,
    ...variantStriped,
    ...variantDark,
    ...variantStripedDark,
  },
};

export default Table;
