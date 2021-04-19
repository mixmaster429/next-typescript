import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavSectionProps {
  title?: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box w="100%">
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>

      <Stack spacing="0" mt="2" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
