import Select from 'react-select';
import { FormLabel, FormControl } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

interface Option {
    value: string;
    label: string;
}

interface SelectLabelProps {
    name: string;
    label: string;
    options: Option[];
    placeholder: string;
    onChange?: any;
}

const SelectLabel = ({ name, label, options, placeholder, onChange }: SelectLabelProps) => {
    const { control } = useFormContext();

    return (
        <FormControl mb={4}>
            <FormLabel>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        placeholder={placeholder}
                        isMulti={true}
                        {...field}
                        options={options}
                        onChange={(selectedOptions) => {
                            field.onChange(selectedOptions);
                            if (onChange) {
                                onChange(selectedOptions);
                            }
                        }}
                    />
                )}
            />
        </FormControl>
    );
};

export default SelectLabel;
