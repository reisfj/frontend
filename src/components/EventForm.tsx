'use client';
import {
  Box,
  Button,
  Input,
  Select,
  Text,
  GridItem,
  Grid,
  Divider,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


interface FormData {
  nomeEvento: string;
  tipo: string;
  dataEvento: string;
  horarioEvento: string;
  local: string;
  email: string;
  telefone?: string;
}


const schema = yup.object().shape({
  nomeEvento: yup
    .string()
    .max(100, 'Máximo de 100 caracteres')
    .required('Nome do evento é obrigatório'),
  tipo: yup.string().required('Tipo é obrigatório'),
  dataEvento: yup.string().required('Data do evento é obrigatória'),
  horarioEvento: yup.string().required('Horário do evento é obrigatório'),
  local: yup.string().required('Local é obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .max(100, 'Máximo de 100 caracteres')
    .required('E-mail é obrigatório'),
  telefone: yup.string().max(20, 'Máximo de 20 caracteres'),
});

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box>
      <Text fontSize="16px">
        <Text as="span" color="#EBF0F9">
          Home /{' '}
        </Text>
        <Text as="span" color="#6D99FB">
          Eventos
        </Text>
      </Text>
      <Text fontSize="28px" fontWeight="600" color="#EBF0F9" mt="32px">
        Adicionar novo Evento
      </Text>
      <Text fontSize="14px" color="#EBF0F9" mt="8px">
        *Campos obrigatórios
      </Text>
      <Box
        width="600px"
        bg="#10141D"
        borderRadius="20px"
        p="32px 24px"
        color="white"
        mt="28px"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem colSpan={2}>
              <Text fontSize="14px" mb="4">
                *Informações básicas
              </Text>
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Nome do evento*
              </Text>
              <Input
                fontSize="14px"
                placeholder="Informe o nome do evento"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                maxLength={100}
                {...register('nomeEvento')}
              />
              {errors.nomeEvento && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.nomeEvento.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Selecione um tipo*
              </Text>
              <Select
                fontSize="14px"
                placeholder="Selecione um tipo"
                bg="#333B49"
                border="none"
                {...register('tipo')}
              >
                <option value="A">A</option>
              </Select>
              {errors.tipo && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.tipo.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Data do evento*
              </Text>
              <Input
                fontSize="14px"
                placeholder="exemplo: 01/01/2024"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                {...register('dataEvento')}
              />
              {errors.dataEvento && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.dataEvento.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Horário do evento*
              </Text>
              <Input
                fontSize="14px"
                placeholder="exemplo: 20:30h"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                {...register('horarioEvento')}
              />
              {errors.horarioEvento && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.horarioEvento.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Selecione um Local*
              </Text>
              <Select
                fontSize="14px"
                placeholder="Selecione um local"
                bg="#333B49"
                border="none"
                {...register('local')}
              >
                <option value="A">A</option>
              </Select>
              {errors.local && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.local.message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={2}>
              <Divider borderColor="white" my="6" />
            </GridItem>
            <GridItem colSpan={2}>
              <Text fontSize="14px" mb="4">
                Contato
              </Text>
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                E-mail*
              </Text>
              <Input
                fontSize="14px"
                placeholder="Informe um e-mail"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                maxLength={100}
                {...register('email')}
              />
              {errors.email && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.email.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Telefone
              </Text>
              <Input
                fontSize="14px"
                placeholder="Informe um telefone"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                maxLength={20}
                {...register('telefone')}
              />
              {errors.telefone && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.telefone.message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={2}>
              <Divider borderColor="white" my="6" />
            </GridItem>
            <GridItem
              colSpan={2}
              display="flex"
              justifyContent="flex-end"
              mb={'32px'}
            >
              <Button
                w={'145px'}
                h={'40px'}
                bg="transparent"
                borderRadius={'6px'}
                mr={'4'}
                border={'1px'}
                borderColor={'white'}
                color="white"
              >
                Cancelar
              </Button>
              <Button
                w={'145px'}
                h={'40px'}
                bg="white"
                color="#333B49"
                borderRadius={'6px'}
                type="submit"
              >
                Cadastrar
              </Button>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
