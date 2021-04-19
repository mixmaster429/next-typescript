import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

interface MainLayoutProps {
  title: string;
  headerAction?: React.ReactNode | null;
}

export default function MainLayout({
  children,
  title,
  headerAction = null,
}: PropsWithChildren<MainLayoutProps>) {
  console.log(headerAction);
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header action={headerAction} />
      <Flex>
        <Sidebar />
        <Flex direction="column" flex="1">
          <Box flex="1" h="100%" bg="#eaeaea" overflowY="auto">
            {children}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
