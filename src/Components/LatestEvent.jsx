import {
  Box,
  Text,
  Icon,
  HStack,
  ButtonGroup,
  IconButton,
  Image,
  VStack,
  useColorMode,
} from '@chakra-ui/react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import { useRef } from 'react';

export default function LatestEvent(props) {
  // Datas
  const latestEvent = [
    { img: '1.png', location: '', date: '', name: '', price: 150000 },
    { img: '2.png', location: '', date: '', name: '', price: 150000 },
    { img: '3.png', location: '', date: '', name: '', price: 150000 },
    { img: '4.png', location: '', date: '', name: '', price: 150000 },
  ];

  // Utils
  const { colorMode } = useColorMode();

  const containerRef = useRef(null);
  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };
  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  return (
    <Box className="sc" px={0} {...props?.style}>
      <HStack justify={'space-between'} px={4} mb={6}>
        <Text className="sh" lineHeight={'normal'}>
          Latest Event
        </Text>

        <ButtonGroup gap={2}>
          <IconButton
            icon={<Icon as={KeyboardArrowLeftIcon} />}
            variant={'outline'}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'var(--divider)' }}
            onClick={handlePrevClick}
          />
          <IconButton
            icon={<Icon as={KeyboardArrowRightIcon} />}
            variant={'outline'}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'var(--divider)' }}
            onClick={handleNextClick}
          />
        </ButtonGroup>
      </HStack>

      <Box
        className="hs"
        ref={containerRef}
        overflow={'auto'}
        pb={2}
        scrollSnapType={'x mandatory'}
      >
        <HStack w={'max-content'} px={4} gap={6}>
          {latestEvent?.map((e, i) => {
            return (
              <Box
                key={i}
                maxW={window.innerWidth >= 350 ? '280px' : '240px'}
                className="bs"
                scrollSnapAlign={'center'}
                border={colorMode === 'dark' && '1px solid var(--divider)'}
                borderRadius={24}
                cursor={'pointer'}
              >
                <Image src={`./latestEvent/img/${e?.img}`} />

                <VStack p={6} align={'flex-start'}>
                  <VStack align={'flex-start'} opacity={0.5}>
                    <HStack>
                      <Icon as={FmdGoodOutlinedIcon} fontSize={16} />
                      <Text fontSize={12}>Lorem ipsum dolor sit amet.</Text>
                    </HStack>
                    <HStack>
                      <Icon as={InsertInvitationOutlinedIcon} fontSize={16} />
                      <Text fontSize={12}>Lorem ipsum dolor sit amet.</Text>
                    </HStack>
                  </VStack>

                  <Text fontWeight={700}>
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>

                  <Box>
                    <Text fontSize={12} opacity={0.5}>
                      Start From
                    </Text>

                    <Text color={'e.500'} fontSize={24} fontWeight={700}>
                      {`Rp ${e?.price.toLocaleString('id-ID')}`}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
}
