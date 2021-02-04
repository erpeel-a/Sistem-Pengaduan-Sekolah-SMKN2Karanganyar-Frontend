import { FormControl, FormLabel, Input, useMediaQuery } from '@chakra-ui/react';

const CustomInput = props => {
  const [isTablet] = useMediaQuery('(min-width: 768px)');
  const { label, type, value, readOnly, onChange, useLabel } = props;

  return (
    <FormControl mb={2} isRequired>
      {useLabel && (
        <FormLabel fontSize={{ base: 'md', md: 'lg' }}>{label}</FormLabel>
      )}
      <Input
        size={!isTablet ? 'md' : 'lg'}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        isReadOnly={readOnly}
      />
    </FormControl>
  );
};

export default CustomInput;
