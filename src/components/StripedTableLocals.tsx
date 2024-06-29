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

export default function StripedTableLocals() {
  const locais = [
    {
      nome: 'Morumbis',
      endereco: 'Avenida Francisco...',
      codigo: 'C,D,E,F,G,H,I,J,K',
    },
    {
      nome: 'Allianz Parque',
      endereco: 'Avenida Francisco...',
      codigo: '3,4,5,6,7,8,9,10',
    },
    {
      nome: 'Neo Química Arena',
      endereco: 'Avenida Francisco...',
      codigo: '1r@chakra-ui.com',
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
        <Text fontSize="20px">Últimos locais adicionados</Text>
        <Link fontSize="16px" href="/locais" m={1} color="blue.400">
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
                  {local.nome}
                </Td>
                <Td maxWidth="150px" isTruncated>
                  {local.endereco}
                </Td>
                <Td maxWidth="150px" isTruncated>
                  {local.codigo}
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
