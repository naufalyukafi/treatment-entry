import { Input, InputProps, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form';

interface InputLabelProps extends InputProps {
    name: string;
    label: string;
    placeholder: string;
    size: string;
    type?: string;
    failed?: {
        status: boolean;
        message: string;
    };
}

const InputLabel = ({ name, label, placeholder, type = "text", size = "lg", failed, ...rest }: InputLabelProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <FormControl mb={4} isInvalid={failed?.status || !!errors[name]}>
            <FormLabel fontSize="16px">{label}</FormLabel>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Input
                        isInvalid={failed?.status || !!errors[name]}
                        errorBorderColor='red.300'
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
            <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
        </FormControl>
    )
}

export default InputLabel;
