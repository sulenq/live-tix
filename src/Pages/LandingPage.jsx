import {
  Box,
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  HStack,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';

import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Nav from '../Components/Nav';

export default function LandingPage() {
  return (
    <Box bgImage={'url(/img/landingPageHero.png)'} bgSize={'cover'} h={'580px'}>
      <VStack className="sc" gap={0} h={'100%'}>
        <Nav />

        <VStack
          id={'hero'}
          gap={0}
          h={'100%'}
          justify={'center'}
          color={'white'}
          mb={'88px'}
        >
          <Text
            className="ns"
            fontSize={64}
            fontWeight={900}
            textAlign={'center'}
            lineHeight={'shorter'}
            mb={4}
          >
            Life is a Live
          </Text>

          <Box maxW={'360px'} mb={6}>
            <Text textAlign={'center'}>
              Welcome to <span style={{ fontWeight: 700 }}>TixLive</span> - Your
              Gateway to Live Experiences!
            </Text>
          </Box>

          <InputGroup color={'black'}>
            <InputLeftElement pointerEvents="none" pl={'24px'}>
              <Icon as={SearchIcon} />
            </InputLeftElement>

            <Input
              pl={'56px'}
              pb={'2px'}
              placeholder="What do yo want to see live?"
              _placeholder={{ color: 'gray.500' }}
              bg={'white'}
              borderRadius={'full'}
            />
          </InputGroup>
        </VStack>
      </VStack>

      <Box className="sc" py={16}>
        <HStack justify={'space-between'}>
          <Text className="sh">Latest Event</Text>

          <ButtonGroup gap={2}>
            <IconButton
              icon={<Icon as={KeyboardArrowLeftIcon} />}
              variant={'outline'}
            />
            <IconButton
              icon={<Icon as={KeyboardArrowRightIcon} />}
              variant={'outline'}
            />
          </ButtonGroup>
        </HStack>
      </Box>
    </Box>
  );
}
