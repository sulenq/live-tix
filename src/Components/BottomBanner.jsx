import {
  Box,
  Button,
  Image,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useScreenWidth } from '../Utils';

export default function BottomBanner(props) {
  // Utils
  const { colorMode } = useColorMode();
  const sw = useScreenWidth();

  return (
    <Box w={'100%'} bg={'p.50'} position={'relative'} {...props?.style}>
      <Box
        position={'absolute'}
        top={'-1px'}
        left={0}
        w={'100%'}
        h={'94px'}
        bg={colorMode === 'light' ? 'white' : 'dark'}
        zIndex={1}
      ></Box>

      <Box className="sc">
        <Stack
          // direction={'row'}
          direction={sw >= 1192 ? 'row' : 'column'}
          align={'flex-end'}
          gap={sw >= 1192 ? 10 : 5}
        >
          <Box px={1} w={sw >= 1192 ? '50%' : '100%'} zIndex={2}>
            <Image src="./bottomBanner/img/2.png" />
          </Box>

          <Box p={6} color={'black'} w={sw >= 1192 ? '50%' : '100%'}>
            <Text fontSize={34} fontWeight={700} mb={4} lineHeight={'normal'}>
              Make your own Event
            </Text>

            <Text fontSize={18} maxW={'357px'} mb={6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>

            <Button
              colorScheme="p"
              px={6}
              w={'142px'}
              h={'47px'}
              bg={'p.400'}
              color={'white'}
              _hover={{ bg: 'p.500' }}
            >
              Create
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
