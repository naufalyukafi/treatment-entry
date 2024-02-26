import { Input, InputProps, FormLabel, FormControl } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form';

interface InputLabelProps extends InputProps {
    name: string;
    label: string;
    placeholder: string;
    size: string;
    type?: string;
}

const InputLabel = ({ name, label, placeholder, type = "text", size = "lg", ...rest }: InputLabelProps) => {
    const { control } = useFormContext();
    return (
        <FormControl mb={4}>
            <FormLabel fontSize="16px">{label}</FormLabel>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Input
                        required={true}
                        variant='filled'
                        type={type}
                        id={name}
                        placeholder={placeholder}
                        size={size}
                        {...field}
                        {...rest}
                    />
                )}
            />
        </FormControl>
    )
}

export default InputLabel;
