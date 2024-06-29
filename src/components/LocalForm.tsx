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
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import ValidateCNPJ from './ValidateCNPJ';

interface FormData {
  cnpj: string;
  nomeLocal: string;
  apelido?: string;
  tipo: string;
  cidade: string;
  estado: string;
  cep: string;
  endereco: string;
  complemento?: string;
  email: string;
  telefone?: string;
  entradas?: string;
  catracas?: string;
}

const schema = yup.object().shape({
  cnpj: yup
    .string()
    .test('is-cnpj-valid', 'CNPJ inválido', (value) =>
      ValidateCNPJ(value || '')
    )
    .required('CNPJ é obrigatório'),
  nomeLocal: yup
    .string()
    .max(100, 'Máximo de 100 caracteres')
    .required('Nome do local é obrigatório'),
  apelido: yup.string().max(50, 'Máximo de 50 caracteres'),
  tipo: yup.string().required('Tipo é obrigatório'),
  cidade: yup
    .string()
    .max(50, 'Máximo de 50 caracteres')
    .required('Cidade é obrigatória'),
  estado: yup
    .string()
    .max(50, 'Máximo de 50 caracteres')
    .required('Estado é obrigatório'),
  cep: yup
    .string()
    .max(20, 'Máximo de 20 caracteres')
    .required('CEP é obrigatório'),
  endereco: yup
    .string()
    .max(200, 'Máximo de 200 caracteres')
    .required('Endereço é obrigatório'),
  complemento: yup.string().max(100, 'Máximo de 100 caracteres'),
  email: yup
    .string()
    .max(100, 'Máximo de 100 caracteres')
    .required('E-mail é obrigatório'),
  telefone: yup.string().max(20, 'Máximo de 20 caracteres'),
});

export default function LocalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [entradasTags, setEntradasTags] = useState<string[]>([]);
  const [catracasTags, setCatracasTags] = useState<string[]>([]);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const addTag = (type: 'entradas' | 'catracas') => {
    const value = watch(type);
    if (
      value &&
      (type === 'entradas' ? entradasTags : catracasTags).length < 3
    ) {
      type === 'entradas'
        ? setEntradasTags([...entradasTags, value])
        : setCatracasTags([...catracasTags, value]);
      setValue(type, '');
    }
  };

  const removeTag = (type: 'entradas' | 'catracas', index: number) => {
    type === 'entradas'
      ? setEntradasTags(entradasTags.filter((_, i) => i !== index))
      : setCatracasTags(catracasTags.filter((_, i) => i !== index));
  };

  return (
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
        Adicionar novo local
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
                Nome do local*
              </Text>
              <Input
                fontSize="14px"
                placeholder="Informe o nome do local"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                maxLength={100}
                {...register('nomeLocal')}
              />
              {errors.nomeLocal && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.nomeLocal.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Apelido
              </Text>
              <Input
                fontSize="14px"
                placeholder="Informe um apelido (caso exista)"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                maxLength={50}
                {...register('apelido')}
              />
              {errors.apelido && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.apelido.message}
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
                CNPJ*
              </Text>
              <InputMask mask="99.999.999/9999-99" {...register('cnpj')}>
                {() => (
                  <Input
                    fontSize="14px"
                    placeholder="Informe o CNPJ"
                    bg="#333B49"
                    border="1px"
                    borderRadius={'4px'}
                  />
                )}
              </InputMask>
              {errors.cnpj && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.cnpj.message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={2}>
              <Divider borderColor="white" my="6" />
            </GridItem>
            <GridItem colSpan={2}>
              <Text fontSize="14px" mb="4">
                Localização
              </Text>
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Cidade*
              </Text>
              <Input
                fontSize="14px"
                placeholder="Informe a Cidade"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                maxLength={50}
                {...register('cidade')}
              />
              {errors.cidade && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.cidade.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Estado*
              </Text>
              <Select
                fontSize="14px"
                placeholder="Selecione um estado"
                bg="#333B49"
                border="none"
                {...register('estado')}
              >
                <option value="BA">BA</option>
              </Select>
              {errors.estado && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.estado.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                CEP*
              </Text>
              <Input
                fontSize="14px"
                placeholder="Informe o CEP"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                maxLength={20}
                {...register('cep')}
              />
              {errors.cep && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.cep.message}
                </Text>
              )}
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Endereço*
              </Text>
              <Flex>
                <Input
                  fontSize="14px"
                  placeholder="Informe o Endereço"
                  bg="#333B49"
                  border="none"
                  borderRadius={'4px'}
                  maxLength={200}
                  {...register('endereco')}
                />
              </Flex>
              {errors.endereco && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.endereco.message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={2}>
              <Text mb="6px" fontSize="14px">
                Complemento
              </Text>
              <Input
                fontSize="14px"
                placeholder="Informe o complemento"
                bg="#333B49"
                border="none"
                borderRadius={'4px'}
                maxLength={100}
                {...register('complemento')}
              />
              {errors.complemento && (
                <Text color="red" fontSize="12px" mt="1">
                  {errors.complemento.message}
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
            <GridItem colSpan={2}>
              <Text fontSize="14px" mb="4">
                Cadastro de entradas e catracas
              </Text>
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Cadastre as entradas
              </Text>
              <Flex align="center" position="relative">
                <Input
                  fontSize="14px"
                  placeholder="Insira as entradas"
                  bg="#333B49"
                  border="none"
                  borderRadius={'4px'}
                  maxLength={50}
                  {...register('entradas')}
                  style={{ paddingRight: '30px' }} 
                />
                <Button
                  ml="-30px"
                  bg="#051D41"
                  textColor="#CAD6EC"
                  w={'37px'}
                  h={'40px'}
                  borderRadius={'4px'}
                  size="sm"
                  onClick={() => addTag('entradas')}
                  position="absolute"
                  top="0"
                  right="0"
                  zIndex="1"
                >
                  +
                </Button>
              </Flex>
              <Flex mt="2" gap="8px" wrap="wrap">
                {entradasTags.map((tag, index) => (
                  <Tag
                    key={index}
                    bg="#9ED0E6"
                    color="#10141D"
                    borderRadius="6px"
                    display="flex"
                    alignItems="center"
                    padding="0 8px"
                  >
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton
                      onClick={() => removeTag('entradas', index)}
                    />
                  </Tag>
                ))}
              </Flex>
            </GridItem>
            <GridItem>
              <Text mb="6px" fontSize="14px">
                Cadastre as catracas
              </Text>
              <Flex align="center" position="relative">
                <Input
                  fontSize="14px"
                  placeholder="Insira as catracas"
                  bg="#333B49"
                  border="none"
                  borderRadius={'4px'}
                  maxLength={50}
                  {...register('catracas')}
                  style={{ paddingRight: '30px' }} 
                />
                <Button
                  ml="-30px"
                  bg="#051D41"
                  textColor="#CAD6EC"
                  borderRadius="4px"
                  w={'37px'}
                  h={'40px'}
                  size="sm"
                  onClick={() => addTag('catracas')}
                  position="absolute"
                  top="0"
                  right="0"
                  zIndex="1"
                >
                  +
                </Button>
              </Flex>
              <Flex mt="2" gap="8px" wrap="wrap">
                {catracasTags.map((tag, index) => (
                  <Tag
                    key={index}
                    bg="#9ED0E6"
                    color="#10141D"
                    borderRadius="6px"
                    display="flex"
                    alignItems="center"
                    padding="0 8px"
                  >
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton
                      onClick={() => removeTag('catracas', index)}
                    />
                  </Tag>
                ))}
              </Flex>
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
