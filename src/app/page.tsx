import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import CardGrid from '@/components/CardGrid';

export default function HomePage() {
  return (
    <Box
      background="url('/images/backgroundImage.jpeg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minHeight="100vh"
    >
      <Flex direction="column" alignItems="start">
        <Flex alignItems="center" marginTop="132px" marginLeft="86px">
          <Box
            width="102px"
            height="126px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/corpoTodo1.png"
              alt="Avatar"
              width="102px"
              height="126px"
            />
          </Box>
          <Box ml="2px">
            <Box mt="20%" transform="translateY(-50%)">
              <Heading
                as="h1"
                fontSize="32px"
                color="#EBF0F9"
                fontWeight="600"
                textAlign="left"
              >
                Hello World
              </Heading>
              <Text
                as="h2"
                fontSize="14px"
                color="#EBF0F9"
                fontWeight="400"
                textAlign="left"
              >
                Confira todos os seus eventos e locais em um só lugar!
              </Text>
            </Box>
          </Box>
        </Flex>
        <CardGrid />
      </Flex>
    </Box>
  );
}
