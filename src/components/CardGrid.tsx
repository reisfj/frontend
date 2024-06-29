'use client';

import React from 'react';
import {
  SimpleGrid,
  Card,
  Heading,
  Text,
  Button,
  Stack,
  Box,
} from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image'; 
import NavLink from './NavLink'; 


import MdFestivalImg from '/public/images/Mdfestival.png';
import MdLocalActivityImg from '/public/images/MdlocalActivity.png';

interface CardData {
  id: string;
  bgColor: string;
  icon: StaticImageData; 
  title: string;
  description: string;
  buttonText: string;
  link: string; 
}

const cardData: CardData[] = [
  {
    id: 'locais',
    bgColor: '#2F3B28',
    icon: MdFestivalImg,
    title: 'Locais',
    description: 'Confira todos os locais cadastrados!',
    buttonText: 'Conferir locais',
    link: '/locais', 
  },
  {
    id: 'eventos',
    bgColor: '#461527',
    icon: MdLocalActivityImg,
    title: 'Eventos',
    description: 'Confira todos os eventos cadastrados!',
    buttonText: 'Conferir eventos',
    link: '/eventos', 
  },
];

interface CardProps {
  bgColor: string;
  icon: StaticImageData; 
  title: string;
  description: string;
  buttonText: string;
  link: string; 
}

const CardComponent: React.FC<CardProps> = ({
  bgColor,
  icon,
  title,
  description,
  buttonText,
  link,
}) => (
  <Card
    bg={bgColor}
    textColor="#EBF0F9"
    padding="24px"
    borderRadius="20px"
    w="550px"
    h="108px"
  >
    <Stack direction="row" justifyContent="space-between" alignItems="center" >
      <Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Image src={icon} alt={title} />
          <Heading fontSize="28px">{title}</Heading>
        </Stack>
        <Text fontSize="16px">{description}</Text>
      </Box>
      <NavLink href={link}>
        <Button fontSize="16px">{buttonText}</Button>
      </NavLink>
    </Stack>
  </Card>
);

const CardGrid: React.FC = () => {
  return (
    <SimpleGrid spacing={8} templateColumns="repeat(2, 1fr)" py={7} mx="105px" >
      {cardData.map(({ id, ...props }) => (
        <CardComponent key={id} {...props} />
      ))}
    </SimpleGrid>
  );
};

export default CardGrid;
