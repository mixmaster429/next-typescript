import React, { useRef } from 'react';

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
  Text,
} from '@chakra-ui/react';
import {
  FaChevronDown,
  FaChevronRight,
  FaCog,
  FaFolderMinus,
  FaPlusCircle,
  FaSortAmountUp,
} from 'react-icons/fa';

import Link from 'next/link';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { SearchBox } from '../../components/SearchBox';
import { RiFolder3Fill, RiMenuLine } from 'react-icons/ri';
import { useDrag } from 'react-dnd';
import MainLayout from "../../components/Layout/MainLayout";

export default function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  return (
    <MainLayout title="Segments">

        <Flex w="100%" bg="#e9e9e9" h="91vh" direction="column">
          <Flex
            w="100%"
            borderBottom="1px solid #ccc"
            h="12"
            px="4"
            align="center"
            justifyContent="space-between"
          >
            <h3 style={{ color: '#111', fontWeight: 'bold' }}>Segments</h3>

            <Flex w={140} align="center" justifyContent="space-between">
              <Link href="/segments" passHref>
                <Button
                  color="gray"
                  fontWeight="500"
                  variant="outline"
                  size="sm"
                >
                  Cancel
                </Button>
              </Link>

              <Button
                colorScheme="blue"
                color="#fff"
                fontWeight="500"
                size="sm"
                borderRadius="full"
              >
                Save
              </Button>
            </Flex>
          </Flex>

          <Flex w="100%" h="100%">
            <Flex
              w="24%"
              h="100%"
              borderRight="1px solid #ccc"
              direction="column"
            >
              <Flex
                className="flex-horizontal"
                w="100%"
                h={16}
                align="center"
                justifyContent="space-between"
                px="4"
              >
                <p>Fields</p>

                <Icon as={FaCog} fontSize="15" color="#111" />
              </Flex>

              <Tabs w="100%" size="md">
                <TabList>
                  <Tab
                    color="#666666"
                    fontSize="11"
                    _selected={{
                      color: '#666666',

                      borderBottomColor: '#1a1414',
                      borderBottom: '2px solid #111',
                    }}
                  >
                    Attributes
                  </Tab>
                  <Tab
                    color="#666666"
                    fontSize="11"
                    _selected={{
                      color: '#666666',
                      borderBottomColor: '#1a1414',
                      borderBottom: '2px solid #111',
                    }}
                  >
                    Events
                  </Tab>

                  <Tab
                    color="#666666"
                    fontSize="11"
                    _selected={{
                      color: '#666666',
                      borderBottomColor: '#1a1414',
                      borderBottom: '2px solid #111',
                    }}
                  >
                    Audiences
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Flex w="100%" direction="column">
                      <SearchBox />

                      <Flex mt="5" direction="column">
                        {true && (
                          <Breadcrumb
                            spacing="8px"
                            separator={
                              <Icon
                                as={FaChevronRight}
                                fontSize="10"
                                color="#111"
                              />
                            }
                          >
                            <BreadcrumbItem>
                              <BreadcrumbLink
                                fontSize="12"
                                color="#131313"
                                href="#"
                                fontWeight="light"
                                opacity="0.8"
                              >
                                <Icon
                                  as={FaFolderMinus}
                                  fontSize="15"
                                  color="#111"
                                />
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem></BreadcrumbItem>
                          </Breadcrumb>
                        )}
                        {false ? (
                          <p
                            style={{
                              color: '#111',
                              fontSize: 11,
                              marginBottom: 6,
                            }}
                          >
                            BROWSE ATTRIBUTES
                          </p>
                        ) : (
                          <Breadcrumb
                            spacing="8px"
                            separator={
                              <Icon
                                as={FaChevronRight}
                                fontSize="10"
                                color="#111"
                              />
                            }
                          >
                            <BreadcrumbItem>
                              <BreadcrumbLink
                                fontSize="12"
                                color="#131313"
                                href="#"
                                fontWeight="light"
                                opacity="0.8"
                              >
                                Attributes
                              </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                              <BreadcrumbLink
                                fontSize="12"
                                color="#111"
                                href="#"
                                fontWeight="bold"
                              >
                                XDM Individual Profile
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                          </Breadcrumb>
                        )}
                        {false && (
                          <Flex
                            background="#fff"
                            w="100%"
                            h="12"
                            borderRadius="sm"
                            align="center"
                            justifyContent="space-between"
                            px="2"
                            cursor="pointer"
                          >
                            <Flex align="center">
                              <Icon
                                as={RiFolder3Fill}
                                fontSize="15"
                                color="#111"
                              />

                              <Text fontSize="11" mt="1" color="#111" ml="2">
                                XDM Individual Profile
                              </Text>
                            </Flex>

                            <Icon
                              as={FaChevronRight}
                              fontSize="10"
                              color="#111"
                            />
                          </Flex>
                        )}

                        {false && (
                          <>
                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              cursor="pointer"
                            >
                              <Flex align="center">
                                <Icon
                                  as={RiFolder3Fill}
                                  fontSize="15"
                                  color="#111"
                                />

                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  XDM Individual Profile
                                </Text>
                              </Flex>

                              <Icon
                                as={FaChevronRight}
                                fontSize="10"
                                color="#111"
                              />
                            </Flex>

                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              mt={1}
                              cursor="pointer"
                            >
                              <Flex align="center">
                                <Icon
                                  as={RiFolder3Fill}
                                  fontSize="15"
                                  color="#111"
                                />

                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  XDM Individual Profile
                                </Text>
                              </Flex>

                              <Icon
                                as={FaChevronRight}
                                fontSize="10"
                                color="#111"
                              />
                            </Flex>

                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              mt={1}
                              cursor="pointer"
                            >
                              <Flex align="center">
                                <Icon
                                  as={RiFolder3Fill}
                                  fontSize="15"
                                  color="#111"
                                />

                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  XDM Individual Profile
                                </Text>
                              </Flex>

                              <Icon
                                as={FaChevronRight}
                                fontSize="10"
                                color="#111"
                              />
                            </Flex>

                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              mt={1}
                              cursor="pointer"
                            >
                              <Flex align="center">
                                <Icon
                                  as={RiFolder3Fill}
                                  fontSize="15"
                                  color="#111"
                                />

                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  XDM Individual Profile
                                </Text>
                              </Flex>

                              <Icon
                                as={FaChevronRight}
                                fontSize="10"
                                color="#111"
                              />
                            </Flex>

                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              mt={1}
                              cursor="pointer"
                            >
                              <Flex align="center">
                                <Icon
                                  as={RiFolder3Fill}
                                  fontSize="15"
                                  color="#111"
                                />

                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  XDM Individual Profile
                                </Text>
                              </Flex>

                              <Icon
                                as={FaChevronRight}
                                fontSize="10"
                                color="#111"
                              />
                            </Flex>
                          </>
                        )}

                        {true && (
                          <Flex direction="column">
                            <div
                              ref={ref}
                              // style={{
                              //   opacity: isDragging ? 0 : 1,
                              //   backgroundColor: isDragging ? '#fff' : '#fff',
                              // }}
                            >
                              <Flex
                                background="#fff"
                                w="100%"
                                h="12"
                                borderRadius="sm"
                                align="center"
                                justifyContent="space-between"
                                px="2"
                                mt={1}
                                cursor="pointer"
                              >
                                <Icon
                                  as={RiMenuLine}
                                  color="#111"
                                  fontSize="10"
                                />
                                <Flex
                                  align="flex-start"
                                  direction="column"
                                  justifyContent="flex-start"
                                >
                                  <Text
                                    fontSize="11"
                                    mt="1"
                                    color="#111"
                                    ml="2"
                                  >
                                    City
                                  </Text>
                                  <Text
                                    fontSize="11"
                                    mt="1"
                                    color="#111"
                                    ml="2"
                                  >
                                    {`..Individual Profile > Individual Test`}
                                  </Text>
                                </Flex>

                                <Icon
                                  as={FaSortAmountUp}
                                  fontSize="15"
                                  color="#111"
                                />
                              </Flex>
                            </div>

                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              mt={1}
                              cursor="pointer"
                            >
                              <Icon
                                as={RiMenuLine}
                                color="#111"
                                fontSize="10"
                              />
                              <Flex
                                align="flex-start"
                                direction="column"
                                justifyContent="flex-start"
                              >
                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  City
                                </Text>
                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  {`..Individual Profile > Individual Test`}
                                </Text>
                              </Flex>

                              <Icon
                                as={FaSortAmountUp}
                                fontSize="15"
                                color="#111"
                              />
                            </Flex>

                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              mt={1}
                              cursor="pointer"
                            >
                              <Icon
                                as={RiMenuLine}
                                color="#111"
                                fontSize="10"
                              />
                              <Flex
                                align="flex-start"
                                direction="column"
                                justifyContent="flex-start"
                              >
                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  City
                                </Text>
                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  {`..Individual Profile > Individual Test`}
                                </Text>
                              </Flex>

                              <Icon
                                as={FaSortAmountUp}
                                fontSize="15"
                                color="#111"
                              />
                            </Flex>

                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              mt={1}
                              cursor="pointer"
                            >
                              <Icon
                                as={RiMenuLine}
                                color="#111"
                                fontSize="10"
                              />
                              <Flex
                                align="flex-start"
                                direction="column"
                                justifyContent="flex-start"
                              >
                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  City
                                </Text>
                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  {`..Individual Profile > Individual Test`}
                                </Text>
                              </Flex>

                              <Icon
                                as={FaSortAmountUp}
                                fontSize="15"
                                color="#111"
                              />
                            </Flex>

                            <Flex
                              background="#fff"
                              w="100%"
                              h="12"
                              borderRadius="sm"
                              align="center"
                              justifyContent="space-between"
                              px="2"
                              mt={1}
                              cursor="pointer"
                            >
                              <Icon
                                as={RiMenuLine}
                                color="#111"
                                fontSize="10"
                              />
                              <Flex
                                align="flex-start"
                                direction="column"
                                justifyContent="flex-start"
                              >
                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  City
                                </Text>
                                <Text fontSize="11" mt="1" color="#111" ml="2">
                                  {`..Individual Profile > Individual Test`}
                                </Text>
                              </Flex>

                              <Icon
                                as={FaSortAmountUp}
                                fontSize="15"
                                color="#111"
                              />
                            </Flex>
                          </Flex>
                        )}
                      </Flex>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <p>Events</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Audiences</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>

            <Flex
              w="54%"
              borderRight="1px solid #ccc"
              direction="column"
              px="6"
            >
              <Flex w="100%" justifyContent="space-between" mt={5}>
                <p style={{ color: '#111', fontSize: 14 }}>Attributes</p>

                <Icon as={FaChevronDown} fontSize="12" color="#111" />
              </Flex>

              <Box
                w="100%"
                mt={2}
                h={140}
                background="#fff"
                borderEndRadius={2}
                border="2px solid #ccc"
              ></Box>
            </Flex>

            <Flex w="22%"></Flex>
          </Flex>
        </Flex>
    </MainLayout>
  );
}
