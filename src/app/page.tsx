'use client'

import { Box, Flex, SimpleGrid} from '@chakra-ui/react';
import CardGrid from '@/components/CardGrid';
import TextGrid from '@/components/TextGrid';
import StripedTableLocals from '@/components/StripedTableLocals';
import StripedTableEvents from '@/components/StripedTableEvents';

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
        <TextGrid />
        <CardGrid />
        <SimpleGrid
        spacing={8}
        templateColumns="repeat(2, 1fr)"
        padding="31px 0"
        m={'0 105px'}
      >
        <StripedTableLocals />
        <StripedTableEvents />
      </SimpleGrid>
      </Flex>
    </Box>
  );
}
