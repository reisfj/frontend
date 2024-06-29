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
  IconButton,
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FiMoreVertical, FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const locais = [
  {
    nome: 'Morumbi',
    endereco: 'Avenida Francisco Matarazzo, 1705 - Água Branca',
    cidadeEstado: 'São Paulo, SP',
    portoes: 'A,B,C,D,E,F,G,H,I,J,K',
    atualizacao: '05/10/23',
  },
  {
    nome: 'Allianz Parque',
    endereco: 'Avenida Francisco Matarazzo, 1705 - Água Branca',
    cidadeEstado: 'São Paulo, SP',
    portoes: '1,2,3,4,5,6,7,8,9,10',
    atualizacao: '05/10/23',
  },
  {
    nome: 'Neo Química Arena',
    endereco: 'Avenida Francisco Matarazzo, 1705 - Água Branca',
    cidadeEstado: 'São Paulo, SP',
    portoes: 'lazar@chakra-ui.com',
    atualizacao: '05/10/23',
  },
  {
    nome: 'Audio Club',
    endereco: 'Avenida Francisco Matarazzo, 1705 - Água Branca',
    cidadeEstado: 'São Paulo, SP',
    portoes: 'javi@chakra-ui.com',
    atualizacao: '05/10/23',
  },
  {
    nome: 'Neo Química Arena',
    endereco: 'Avenida Francisco Matarazzo, 1705 - Água Branca',
    cidadeEstado: 'São Paulo, SP',
    portoes: 'lazar@chakra-ui.com',
    atualizacao: '05/10/23',
  },
];

type FullStripedTableLocalsProps = {
  onAddLocalClick: () => void;
};

const FullStripedTableLocals: React.FC<FullStripedTableLocalsProps> = ({
  onAddLocalClick,
}) => {
  const [activePage, setActivePage] = useState(1);

  return (
    <Box bg="gray.800" color="white" p={8} borderRadius="20px" width="1272px">
      <Flex mb="26.5px" alignItems="center" justifyContent="space-between">
        <InputGroup width="392px" mb="26.5px">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Pesquise por nome do local"
            size="md"
            height="35px"
            bg="gray.700"
            borderColor="gray.600"
            _placeholder={{ color: 'gray.400' }}
            fontSize="14px"
          />
        </InputGroup>
        <Button
          width="147px"
          height="40px"
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.600' }}
          fontSize="16px"
          fontWeight="600"
          onClick={onAddLocalClick} 
        >
          Adicionar local
        </Button>
      </Flex>
      <TableContainer>
        <Table
          variant="simple"
          size="md"
          sx={{
            'tbody tr:nth-of-type(odd)': {
              backgroundColor: '#333B49',
            },
            'th, td': {
              border: 'none',
              fontSize: '14px',
            },
            th: {
              pb: '18px',
            },
            table: {
              borderCollapse: 'collapse',
            },
          }}
        >
          <Thead>
            <Tr>
              <Th color="gray.300">Nome do Local</Th>
              <Th color="gray.300">Endereço</Th>
              <Th color="gray.300">Cidade e Estado</Th>
              <Th color="gray.300">Portões cadastrados</Th>
              <Th color="gray.300">Atualização</Th>
              <Th color="gray.300"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {locais.map((local, index) => (
              <Tr key={index}>
                <Td>{local.nome}</Td>
                <Td>{local.endereco}</Td>
                <Td>{local.cidadeEstado}</Td>
                <Td>{local.portoes}</Td>
                <Td>{local.atualizacao}</Td>
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
      <Flex justifyContent="center" mt="20px">
        {Array.from({ length: 4 }, (_, i) => (
          <Button
            key={i + 1}
            variant="link"
            colorScheme="whiteAlpha"
            mx="5px"
            onClick={() => setActivePage(i + 1)}
            bg={activePage === i + 1 ? '#4E4F5B' : 'transparent'}
            color={activePage === i + 1 ? 'white' : 'gray.300'}
            width="26px"
            height="26px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            _hover={{ bg: '#4E4F5B' }}
          >
            {i + 1}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default FullStripedTableLocals;
