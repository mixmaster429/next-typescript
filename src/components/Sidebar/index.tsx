import {
  Box
} from "@chakra-ui/react";

import { SideBarNav } from "./SidebarNav";

export const Sidebar: React.FC = () => {
  return (
    <Box minW="260px" h="100%" p="5">
      <SideBarNav />
    </Box>
  );
}
