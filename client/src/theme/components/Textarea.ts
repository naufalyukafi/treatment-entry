import Input from './Input';

const Textarea = {
  sizes: {
    md: Input.sizes.md.field,
    lg: Input.sizes.lg.field,
  },
  variants: { outline: (props) => Input.variants.outline(props).field },
};

export default Textarea;
