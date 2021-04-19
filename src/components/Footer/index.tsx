import {
	Box,
	Link,
} from "@chakra-ui/react";
// import Link from 'next/link';

export const Footer: React.FC = () => {
	return (
		<Box className="footer">
			<div className="footer-links">
				<Link href="/">Terms of Use</Link>
				<Link href="/">Privacy Policy</Link>
				<div>Language: <span className="language">English</span></div>
			</div>
			<div>
				Copyright &#169;	2021 Adobe Inc. All rights reserved
			</div>
		</Box>
	);
}
