const styles = {
  global: ({ colorMode }) => ({
    body: {
      fontFamily: 'body',
      color: colorMode === 'light' ? 'carenow-black' : 'white',
      bg: colorMode === 'light' ? 'white' : 'carenow-black',
    },
  }),
};

export default styles;
