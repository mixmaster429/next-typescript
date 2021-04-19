import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

interface HeaderProps {
  action?: React.ReactNode | null;
}
export function Header({ action }: HeaderProps) {
  return (
    <Box bg="header.100" className="header">
      <Box>
        <HamburgerIcon className="icon-hamhurger" />
        <div className="logo">
          <Image src="/icons/logo.svg" alt="nextjs" boxSize="24px" />
          <div className="text">Project Sierra</div>
        </div>
        <Button colorScheme="teal" size="xs">
          Beta
        </Button>
      </Box>
      <Box className="right-icons">
        <button className="btn-round-blue">Beta Feedback</button>
        <span className="text">Mobile DX Product Demo</span>
        <div>
          <Image src="/icons/sidebar-icon.svg" alt="nextjs" boxSize="24px" />
        </div>
        <div>
          <Image src="/icons/help-icon.svg" alt="nextjs" boxSize="24px" />
        </div>
        <div>
          <Image src="/icons/notification-icon.svg" alt="nextjs" boxSize="24px" />
        </div>
        <div>
          <Image
            borderRadius="full"
            boxSize="24px"
            objectFit="cover"
            src="/images/jacqueline_oneill.jpg"
            alt="Segun Adebayo" />
        </div>
      </Box>
    </Box>
  );
};
