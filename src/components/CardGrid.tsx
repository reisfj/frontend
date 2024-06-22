import {
  SimpleGrid,
  Card,
  Heading,
  Text,
  Button,
  Stack,
  Box,
} from '@chakra-ui/react';

import MdLocalActivity from './MdLocalActivity';
import Mdfestival from './MdFestival';

export default function CardGrid() {
  return (
    <>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(2, 1fr)"
        padding="108px"
        mt="80px"
      >
        <Card
          bg={'#2F3B28'}
          textColor={'#EBF0F9'}
          padding={'24px'}
          borderRadius={'16px'}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Mdfestival />
                <Heading fontSize={'28px'}>Locais</Heading>
              </Stack>
              <Text fontSize={'16px'}>
                Confira todos os locais cadastrados!
              </Text>
            </Box>
            <Button fontSize={'16px'}>Conferir locais</Button>
          </Stack>
        </Card>
        <Card
          bg={'#461527'}
          textColor={'#EBF0F9'}
          padding={'24px'}
          borderRadius={'16px'}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Stack direction="row" alignItems="center" spacing={2}>
                <MdLocalActivity />
                <Heading fontSize={'28px'}>Eventos</Heading>
              </Stack>
              <Text fontSize={'16px'}>
                Confira todos os eventos cadastrados!
              </Text>
            </Box>
            <Button fontSize={'16px'}>Conferir eventos</Button>
          </Stack>
        </Card>
      </SimpleGrid>
    </>
  );
}
