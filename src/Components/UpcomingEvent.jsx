import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';

export default function UpcomingEvent(props) {
  // Datas
  const ue = [
    {
      img: '1.png',
      month: 'APR',
      date: '20',
      name: 'Lorem ipsum dolor sit amet consec tetur.',
      summary: 'Lorem ipsum dolor sit amet consectetur. Vitae in id.',
    },
    {
      img: '2.png',
      month: 'APR',
      date: '20',
      name: 'Lorem ipsum dolor sit amet consec tetur.',
      summary: 'Lorem ipsum dolor sit amet consectetur. Vitae in id.',
    },
    {
      img: '3.png',
      month: 'APR',
      date: '20',
      name: 'Lorem ipsum dolor sit amet consec tetur.',
      summary: 'Lorem ipsum dolor sit amet consectetur. Vitae in id.',
    },
    {
      img: '4.png',
      month: 'APR',
      date: '20',
      name: 'Lorem ipsum dolor sit amet consec tetur.',
      summary: 'Lorem ipsum dolor sit amet consectetur. Vitae in id.',
    },
    {
      img: '5.png',
      month: 'APR',
      date: '20',
      name: 'Lorem ipsum dolor sit amet consec tetur.',
      summary: 'Lorem ipsum dolor sit amet consectetur. Vitae in id.',
    },
    {
      img: '6.png',
      month: 'APR',
      date: '20',
      name: 'Lorem ipsum dolor sit amet consec tetur.',
      summary: 'Lorem ipsum dolor sit amet consectetur. Vitae in id.',
    },
  ];

  // Utils
  const { colorMode } = useColorMode();

  return (
    <Box className="sc" {...props?.style}>
      <HStack justify={'space-between'} mb={6}>
        <Text className="sh" lineHeight={'normal'}>
          Upcoming Event
        </Text>
      </HStack>

      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {ue?.map((e, i) => {
          return (
            <Box
              key={i}
              //   maxW={'380px'}
              borderRadius={24}
              className="bs"
              border={colorMode === 'dark' && '1px solid var(--divider)'}
            >
              <Image src={`./upcomingEvent/img/${e?.img}`} />

              <HStack align={'flex-start'} gap={6} p={6}>
                <VStack gap={0}>
                  <Text fontSize={14} fontWeight={700}>
                    {e?.month}
                  </Text>

                  <Text
                    fontSize={32}
                    fontWeight={700}
                    lineHeight={'100%'}
                    color="p.300"
                  >
                    {e?.date}
                  </Text>
                </VStack>

                <Box>
                  <Text fontWeight={700} noOfLines={2} mb={2}>
                    {e?.name}
                  </Text>

                  <Text fontSize={12} opacity={0.5} noOfLines={2}>
                    {e?.summary}
                  </Text>
                </Box>
              </HStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
