import { Container, Box, Heading, VStack, Text, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        <Box gridColumn={{ md: "span 2" }}>
          <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Story 1</Heading>
              <Text mt={2}>Summary of the top story...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Story 2</Heading>
              <Text mt={2}>Summary of the top story...</Text>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">News 1</Heading>
              <Text mt={2}>Summary of the latest news...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">News 2</Heading>
              <Text mt={2}>Summary of the latest news...</Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;