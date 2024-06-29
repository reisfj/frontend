'use client'

import { Box, Flex, Text} from '@chakra-ui/react';
import { useState } from 'react';
import LocalForm from '@/components/LocalForm';
import FullStripedTableLocals from '@/components/FullStripedTableLocals';

export default function LocalsPage() {
  const [showForm, setShowForm] = useState(false);

  const handleAddLocalClick = () => {
    setShowForm(true);
  };

  return (
    <Flex
      backgroundColor={'#191E28'}
      direction="column"
      alignItems="center"
      p={'125px 0'}
    >
      <Box>
        <Box mt="28px">
          {!showForm ? (
            <Box>
              <Text fontSize="16px">
                <Text as="span" color="#EBF0F9">
                  Home /{' '}
                </Text>
                <Text as="span" color="#6D99FB">
                  Locais
                </Text>
              </Text>
              <Text fontSize="28px" fontWeight="600" color="#EBF0F9" mt="32px">
                Locais
              </Text>
              <Text fontSize="14px" color="#EBF0F9" mt="8px" mb="26px">
                Confira a lista de todos os locais cadastrados 
              </Text>
              <FullStripedTableLocals onAddLocalClick={handleAddLocalClick} />
            </Box>
          ) : (
            <LocalForm />
          )}
        </Box>
      </Box>
    </Flex>
  );
}
