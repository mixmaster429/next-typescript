import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      align="center"
      px="2"
      height={5}
      maxHeight="3"
      minWidth={250}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="#fff"
      borderRadius="2"
      border="1px solid #ccc"
    >
      <Icon as={RiSearchLine} fontSize="15" />
      <Input
        color="#111"
        variant="unstyled"
        px="4"
        mr="4"
        fontSize={10}
        placeholder="Buscar na plataforma"
        _placeholder={{ color: '#111' }}
      />
    </Flex>
  );
}
