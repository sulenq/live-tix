import { useRef } from 'react';

import {
  Button,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ButtonGroup,
  VStack,
} from '@chakra-ui/react';

import MenuIcon from '@mui/icons-material/Menu';

import { useScreenWidth } from '../Utils';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Nav() {
  // Datas
  const nav = [
    { name: 'Event', link: '' },
    { name: 'About Us', link: '' },
  ];

  // Utils
  const sw = useScreenWidth();

  //Components
  const NavMobile = () => {
    // Utils
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
      <>
        <IconButton
          onClick={onOpen}
          icon={<Icon as={MenuIcon} />}
          variant={'outline'}
          borderColor={'white'}
          color={'white'}
          _hover={{ color: 'black', bg: 'gray.100' }}
        ></IconButton>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader>Navigation</DrawerHeader>

            <DrawerBody px={2}>
              <VStack align={'flex-start'}>
                {nav.map((n, i) => {
                  return (
                    <Link key={i} to="#" className="drawerItem">
                      {n.name}
                    </Link>
                  );
                })}
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <HStack w={'100%'} justify={'space-between'}>
                <ColorModeSwitcher ml={0} />

                <ButtonGroup>
                  <Button variant={'outline'} colorScheme="p">
                    Sign Up
                  </Button>
                  <Button colorScheme="p">Log In</Button>
                </ButtonGroup>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };

  return (
    <HStack w={'100%'} py={6} color={'white'} justify={'space-between'}>
      <HStack gap={6}>
        {sw >= 360 && <Image src="./logo2.png" h={'40px'} />}

        {sw >= 770 && (
          <>
            <Link to="#" px={4}>
              Event
            </Link>
            <Link to="#" px={4}>
              About Us
            </Link>
          </>
        )}
      </HStack>

      <HStack gap={4}>
        {sw < 770 ? (
          <NavMobile />
        ) : (
          <ColorModeSwitcher ml={0} _hover={{ bg: 'whiteAlpha.200' }} />
        )}

        <Button
          variant={'outline'}
          borderColor={'white'}
          color={'white'}
          _hover={{ color: 'black', bg: 'gray.100' }}
        >
          Sign Up
        </Button>

        <Button className="heroLogInBtn">Log In</Button>
      </HStack>
    </HStack>
  );
}
