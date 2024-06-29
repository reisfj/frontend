'use client';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import NavLink from './NavLink';

const MAIN_MENU = [
  { name: 'Home', href: '/' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Locais', href: '/locais' },
];

const USER_MENU = [
  { name: 'Perfil', href: '/perfil' },
  { name: 'Configurações', href: '/configuracoes' },
  { name: 'Sair', href: '/sair' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuBgColor = useColorModeValue('#cad6ec10', '#cad6ec30');

  return (
    <Box p={4} position="fixed" top={0} left={0} right={0}>
      <Flex h={16} alignItems="center" justifyContent="space-between" px={24}>
        
        <HStack spacing={8} alignItems="center">
          <Box display="flex" alignItems="center" justifyContent="center" mr={"102px"}>
            <Image
              src="/images/OnOnetreeLogoBranco.png"
              alt="Avatar"
              width="131.23px"
              height="24px"
            />
          </Box>
        <HStack
          as="nav"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
          color="custom.onSecundary"
        >
          {MAIN_MENU.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </HStack>
        </HStack>


        <Flex alignItems="center">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={toggleMenu}
          />
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            mr={2}
          />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="transparent"
              textColor="custom.onSecundary"
              _hover={{ bg: menuBgColor }}
              _expanded={{ bg: menuBgColor }}
            >
              Olá, Mariana
            </MenuButton>
            <MenuList>
              {USER_MENU.map((link) => (
                <MenuItem
                  key={link.name}
                  _hover={{ bg: menuBgColor }}
                  as="a"
                  href={link.href}
                >
                  {link.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {MAIN_MENU.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
