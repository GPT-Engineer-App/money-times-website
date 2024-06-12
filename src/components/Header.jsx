import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Heading size="lg">Financial Times</Heading>
        <Spacer />
        <Link href="/" px={2} color="white">Home</Link>
        <Link href="/latest" px={2} color="white">Latest</Link>
        <Link href="/top-stories" px={2} color="white">Top Stories</Link>
      </Flex>
    </Box>
  );
};

export default Header;