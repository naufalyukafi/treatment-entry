const Form = {
  baseStyle: ({ colorMode }) => ({
    helperText: {
      color: colorMode === 'light' ? 'carenow-neutral-4' : 'carenow-dark-text',
      fontSize: 'xs',
    },
  }),
};

export default Form;
