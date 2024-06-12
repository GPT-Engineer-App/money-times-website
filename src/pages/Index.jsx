import { Box, Container, Flex, Heading, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaNewspaper, FaClock, FaLink } from "react-icons/fa";

const Header = () => (
  <Box bg="brand.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Heading as="h1" size="xl">Financial Times</Heading>
    </Container>
  </Box>
);

const TopStories = () => (
  <Box>
    <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
    <VStack spacing={4} align="start">
      <Box>
        <Heading as="h3" size="md">Story 1</Heading>
        <Text>Summary of the top story...</Text>
      </Box>
      <Box>
        <Heading as="h3" size="md">Story 2</Heading>
        <Text>Summary of the second top story...</Text>
      </Box>
    </VStack>
  </Box>
);

const LatestNews = () => (
  <Box>
    <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
    <VStack spacing={4} align="start">
      <Box>
        <Heading as="h3" size="md">News 1</Heading>
        <Text>Summary of the latest news...</Text>
      </Box>
      <Box>
        <Heading as="h3" size="md">News 2</Heading>
        <Text>Summary of the second latest news...</Text>
      </Box>
    </VStack>
  </Box>
);

const Sidebar = () => (
  <Box>
    <Heading as="h2" size="lg" mb={4}>Sidebar</Heading>
    <VStack spacing={4} align="start">
      <HStack>
        <FaLink />
        <Text>Link 1</Text>
      </HStack>
      <HStack>
        <FaLink />
        <Text>Link 2</Text>
      </HStack>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <Container maxW="container.xl" mt={8}>
        <Flex>
          <Box flex="3" pr={8}>
            <TopStories />
            <Divider my={8} />
            <LatestNews />
          </Box>
          <Box flex="1">
            <Sidebar />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;