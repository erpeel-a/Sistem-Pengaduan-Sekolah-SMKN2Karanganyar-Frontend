import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const CustomInput = props => {
  const { label, type, value, readOnly, required } = props;

  return (
    <FormControl mb={2} isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={label}
        value={value}
        isReadOnly={readOnly}
      />
    </FormControl>
  );
};

export default CustomInput;
