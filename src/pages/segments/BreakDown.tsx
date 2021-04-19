import {
	Box,
	Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

export const BreakDown: React.FC = () => {
	return (
		<Box className="breakdown">
			<Popover
				placement="top"
				trigger="hover"
			>
				<PopoverTrigger>
					<div className="breakdown-bar"></div> 
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverBody>
						<div className="text-green">Realized: 0 (0%)</div>
						<div className="text-blue">Existing: 0 (0%)</div>
						<div className="text-red">Existing: 0 (0%)</div>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</Box>
	);
}
