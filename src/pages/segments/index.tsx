import {
  Button,
  Flex,
  HStack,
  Icon,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" mx="auto">
        <HStack ml={5} w={220} align="flex-start">
          <Sidebar />
        </HStack>

        <Flex w="100%" bg="#e9e9e9" h="91vh" direction="column">
          <Flex h="12" px="4" align="center" justifyContent="space-between">
            <h3>Segments</h3>

            <Flex w={400} align="center" justifyContent="space-between">
              <Switch id="email-alerts" />
              <span>
                Add all segments to schedule
              </span>

              <Link href="/segments/create" passHref>
                <Button
                  colorScheme="gray"
                  color="gray"
                  fontWeight="500"
                  variant="outline"
                  leftIcon={<Icon as={FaPlusCircle} fontSize="18" />}
                >
                  Create segment
                </Button>
              </Link>
            </Flex>
          </Flex>

          <Tabs w="100%" size="md">
            <TabList>
              <Tab
                color="#666666"
                fontSize="sm"
                _selected={{
                  color: '#666666',

                  borderBottomColor: '#666666',
                  borderBottom: '4px solid #666666',
                }}
              >
                Overview
              </Tab>
              <Tab
                color="#666666"
                fontSize="sm"
                _selected={{
                  color: '#666666',
                  borderBottomColor: '#666666',
                  borderBottom: '4px solid #666666',
                }}
              >
                Browse
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
}
