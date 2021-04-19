import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Icon,
	IconButton,
	Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri';
import { MdFilterList } from "react-icons/md";
import { BreakDown } from "./BreakDown";

export const BrowsePanel: React.FC = () => {
	return (
		<Box>
			<Flex>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<Icon as={RiSearchLine} fontSize="15" />}
					/>
					<Input
						width="300px"
						className="search-box"
						variant="outline"
						colorScheme="teal"
						placeholder="Search" />
				</InputGroup>
				<IconButton
          aria-label="Filter"
          icon={<Icon as={MdFilterList} boxSize={18} />}
          variant="ghost"
        />
			</Flex>
			<Box flex="1" mt="2">
        <Table bg="white">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Breakdown</Th>
              <Th>Churn</Th>
              <Th>Profile Count</Th>
              <Th>Evaluation method</Th>
              <Th>Created</Th>
              <Th>Last Updated</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>
            <Tr>
              <Td>Use Case Segment-5a00b724-cfe5-4a54-9593-06c2e89a1310</Td>
              <Td>
                <BreakDown />
              </Td>
              <Td>0%</Td>
              <Td>0</Td>
              <Td>Streaming</Td>
              <Td>3/15/2021, 8:01 AM</Td>
              <Td>4/5/2021, 8:01 AM</Td>
            </Tr>

          </Tbody>
        </Table>
      </Box>
		</Box>
	);
}
