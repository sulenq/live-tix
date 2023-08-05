import { Box, Image, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

export default function Partner(props) {
  // Datas
  const partner = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
  ];
  return (
    <Box bg={'white'} color={'black'}>
      <Box className="sc" {...props?.style}>
        <VStack gap={4} mb={16}>
          <Text className="sh">Partner</Text>

          <Text textAlign={'center'} fontSize={18} opacity={0.5}>
            Experience Our Collaborations with Industry-Defining Brands.
          </Text>
        </VStack>

        <Wrap justify={'center'} spacing={16}>
          {partner?.map((p, i) => {
            return (
              <WrapItem key={i}>
                <Image src={`./partner/img/${p}`} h={'50px'} />
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </Box>
  );
}
