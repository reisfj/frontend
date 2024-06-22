// 'use client';

// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import OnOnetreeLogoBranco from './OnOnetreeLogoBranco';

// interface Props {
//   children: React.ReactNode;
// }

// const MainMenu = ['Home', 'Eventos', 'Locais'];
// const UserMenu = ['Perfil', 'Configurações', 'Sair'];

// const NavLink = (props: Props) => {
//   const { children } = props;

//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: '#999aa110',
//       }}
//       href={'#'}
//     >
//       {children}
//     </Box>
//   );
// };

// export default function Navbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box px={4} position={'fixed'} top={'0'} left={'0'} right={'0'}>
//         <Flex
//           h={16}
//           alignItems={'center'}
//           justifyContent={'space-between'}
//           padding={'0 85px'}
//         >
//           <HStack spacing={8} alignItems={'center'}>
//             <Box>
//               <OnOnetreeLogoBranco />
//             </Box>
//           </HStack>

//           <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
//             {MainMenu.map((link) => (
//               <NavLink key={link}>
//                 <Box color="custom.onSecundary">{link}</Box>
//               </NavLink>
//             ))}
//           </HStack>

//           <Flex alignItems={'center'}>
//             <IconButton
//               size={'md'}
//               icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//               aria-label={'Open Menu'}
//               display={{ md: 'none' }}
//               onClick={isOpen ? onClose : onOpen}
//             />
//             <Avatar
//               size={'sm'}
//               src={
//                 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//               }
//               mr={2}
//             />
//             <Menu>
//               <MenuButton
//                 bgColor={'transparent'}
//                 _hover={{
//                   textDecoration: 'none',
//                   bg: '#999aa110',
//                 }}
//                 color="custom.onSecundary"
//                 as={Button}
//                 rightIcon={<ChevronDownIcon />}
//               >
//                 Olá, Mariana
//               </MenuButton>
//               <MenuList bgColor={'#999aa110'}>
//                 <Box pb={4} display={{ md: 'flex' }}>
//                   <Stack as={'nav'} color="custom.onSecundary">
//                     {UserMenu.map((link) => (
//                       <NavLink key={link}>{link}</NavLink>
//                     ))}
//                   </Stack>
//                 </Box>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {MainMenu.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//     </>
//   );
// }


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
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import OnOnetreeLogoBranco from './OnOnetreeLogoBranco';

interface Props {
  children: React.ReactNode;
}

const MainMenu = ['Home', 'Eventos', 'Locais'];
const UserMenu = ['Perfil', 'Configurações', 'Sair'];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} position={'fixed'} top={'0'} left={'0'} right={'0'}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          padding={'0 85px'}
        >
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <OnOnetreeLogoBranco />
            </Box>
          </HStack>

          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {MainMenu.map((link) => (
              <NavLink key={link}>
                <Box color="custom.onSecundary">{link}</Box>
              </NavLink>
            ))}
          </HStack>

          <Flex alignItems={'center'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Avatar
              size={'sm'}
              src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
              mr={2}
            />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg={'transparent'}
                textColor="custom.onSecundary"
                _hover={{ bg: useColorModeValue('#cad6ec10', '#cad6ec30') }}
                _expanded={{ bg: useColorModeValue('#cad6ec10', '#cad6ec30') }}
              >
                Olá, Mariana
              </MenuButton>
              <MenuList>
                {UserMenu.map((link) => (
                  <MenuItem                    
                    key={link}
                    _hover={{
                      bg: useColorModeValue('#cad6ec10', '#cad6ec30'),
                      width: '100%',
                    }}
                  >
                    {link}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {MainMenu.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
