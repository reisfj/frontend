import { Heading, Text, Box, Flex, Image } from '@chakra-ui/react';

export default function TextGrid() {
  return (
    <Flex alignItems="center" marginTop="132px" marginLeft="100px">
      <Box display="flex" alignItems="center" justifyContent="center">
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
            Olá, Mariana
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
  );
}
