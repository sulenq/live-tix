import { Box, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';

export default function Categories(props) {
  //Datas
  const categories = [
    { img: '1.png', name: 'All Events' },
    { img: '2.png', name: 'Concert' },
    { img: '3.png', name: 'Exhibition' },
    { img: '4.png', name: 'Sports' },
    { img: '5.png', name: 'Seminar' },
    { img: '6.png', name: 'Comedy' },
  ];

  return (
    <Box className="sc" {...props?.style}>
      <HStack justify={'space-between'} mb={6}>
        <Text className="sh" lineHeight={'normal'}>
          Categories
        </Text>
      </HStack>

      <SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
        {categories?.map((c, i) => {
          return (
            <Box
              key={i}
              cursor={'pointer'}
              borderRadius={24}
              overflow={'hidden'}
              position={'relative'}
            >
              <Image src={`./categories/img/${c?.img}`} />

              <Text
                className="bs"
                fontSize={24}
                fontWeight={800}
                color={'white'}
                position={'absolute'}
                bottom={'24px'}
                left={'24px'}
              >
                {c?.name}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
