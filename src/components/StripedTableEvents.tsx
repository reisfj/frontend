import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Link,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

export default function StripedTableEvents() {
  const locais = [
    {
      Descrição: 'Final Copa América',
      Tipo: 'Futebol',
      Local: 'Morumbi',
    },
    {
      Descrição: 'Semi Final Copa América',
      Tipo: 'Futebol',
      Local: 'Morumbi',
    },
    {
      Descrição: 'Love on tour - Harry Styles',
      Tipo: 'Show',
      Local: 'Morumbi',
    },
  ];

  return (
    <Box
      bg="gray.800"
      color="white"
      p={8}
      borderRadius="20px"
      width="550px"
      height="271px"
    >
      <Flex mb={'20px'} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize="20px">Últimos Eventos adicionados</Text>
        <Link fontSize="16px" href="/eventos" m={1} color="blue.400">
          Ver todos
        </Link>
      </Flex>
      <TableContainer>
        <Table
          variant="simple"
          size="sm"
          sx={{
            'tbody tr:nth-of-type(odd)': {
              backgroundColor: '#333B49',
            },
            'th, td': {
              border: 'none',
            },
            table: {
              borderCollapse: 'collapse',
            },
          }}
        >
          <Thead></Thead>
          <Tbody>
            {locais.map((local, index) => (
              <Tr key={index}>
                <Td maxWidth="100px" isTruncated>
                  {local.Descrição}
                </Td>
                <Td maxWidth="150px" isTruncated>
                  {local.Tipo}
                </Td>
                <Td maxWidth="150px" isTruncated>
                  {local.Local}
                </Td>
                <Td>
                  <IconButton
                    aria-label="Opções"
                    icon={<FiMoreVertical />}
                    variant="ghost"
                    colorScheme="whiteAlpha"
                    size="sm"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
