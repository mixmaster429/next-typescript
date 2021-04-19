import React from "react";
import { Flex } from "@chakra-ui/react";

import { Header, Sidebar, StatusBar } from "@components";

const Home: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <StatusBar />
      <div>
        <Sidebar></Sidebar>
      </div>
    </Flex>
  );
};

export default Home;
