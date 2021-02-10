import { FormControl, FormLabel, Input, useMediaQuery } from '@chakra-ui/react';

const CustomInput = props => {
  const [isTablet] = useMediaQuery('(min-width: 768px)');
  const {
    pt,
    label,
    type,
    value,
    readOnly,
    onChange,
    isInvalid,
    useLabel,
    required,
    accept,
  } = props;

  return (
    <FormControl mb={2} isRequired={required}>
      {useLabel && (
        <FormLabel fontSize={{ base: 'md', md: 'lg' }}>{label}</FormLabel>
      )}
      <Input
        pt={pt}
        size={!isTablet ? 'md' : 'lg'}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
        isReadOnly={readOnly}
        accept={accept}
      />
    </FormControl>
  );
};

export default CustomInput;
