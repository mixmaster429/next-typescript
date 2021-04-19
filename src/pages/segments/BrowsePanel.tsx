import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	Icon
} from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri';


export const BrowsePanel: React.FC = () => {
	return (
		<Box>
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
		</Box>
	);
}
