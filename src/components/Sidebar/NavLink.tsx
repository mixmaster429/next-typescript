import {
  Link as ChakraLink,
  Image,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: string;
  children: string;
  href: string;
  shouldMathExactHref?: boolean;
}

const NavLinkStyled = {
  textDecoration: "none",
  backgroundColor: "gray.200",
};

export function NavLink({
  icon,
  children,
  href,
  shouldMathExactHref = false,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink
      href={href}
      shouldMathExactHref={shouldMathExactHref}
      passHref
    >
      <ChakraLink
        d="flex"
        alignItems="center"
        fontSize="md"
        p="1.5"
        borderRadius="base"
        w="100%"
        _hover={NavLinkStyled}
        {...rest}
      >
        <Image src={icon} alt="icon" boxSize="18px" />
        <Text ml="2" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
