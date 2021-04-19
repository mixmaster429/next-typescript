import {
  Button,
  Flex,
  Icon,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';
import MainLayout from "../../components/Layout/MainLayout";
import { OverviewPanel } from './OverviewPanel';
import { BrowsePanel } from './BrowsePanel';
import { Footer } from '../../components/Footer';


export default function Dashboard() {
  return (
    <MainLayout title="Segments">
      <Flex w="100%" direction="column">
        <Flex h="12" px="4" align="center" justifyContent="space-between">
          <h2>Segments</h2>

          <Flex w={400} align="center" justifyContent="space-between">
            <Switch id="email-alerts" />
            <span>
              Add all segments to schedule
              </span>

            <Link href="/segments/create" passHref>
              <Button
                colorScheme="blackAlpha"
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
              <OverviewPanel />
            </TabPanel>
            <TabPanel>
              <BrowsePanel />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Footer />
      </Flex>
    </MainLayout>
  );
}
