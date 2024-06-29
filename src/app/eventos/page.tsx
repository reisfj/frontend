'use client'

import { Box, Flex } from '@chakra-ui/react';
import EventForm from '@/components/EventForm';

export default function EventsPage() {
  return (
    <Flex
      backgroundColor={'#191E28'}
      direction="column"
      alignItems="center"
      p={'125px 0'}
    >
      <Box>
        <Box mt="28px">
          <EventForm />
          
        </Box>
      </Box>
    </Flex>
  );
}
