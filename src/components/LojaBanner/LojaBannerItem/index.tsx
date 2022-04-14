import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

interface LojaBannerItemProps{
    imgBackground: string,
    imgLogoLoja: string,
    imgGrid: string[],
    title: string,
    linkLoja?: string
}

export function LojaBannerItem({imgBackground, imgLogoLoja, imgGrid, title, linkLoja}:LojaBannerItemProps){
    return(
        <Flex
          flexDirection={'column'}
          pos={'relative'}
          maxW={'300px'}
          h={'340px'}
          m={'0 8px 20px'}
          bg={'white'}
          borderRadius={'8px'}
          justifyContent={'space-between'}
          align={'center'}
          boxShadow={'0 2px 15px 0 rgb(0 0 0 / 10%)'}
          >
            <Image src={`${imgLogoLoja}`} pos={'absolute'} borderRadius={'8px'} top={'55px'} boxShadow={'0 2px 15px 0 rgb(0 0 0 / 10%)'}/>
            <Image src={`${imgBackground}`} h={'95px'} borderTopLeftRadius={'8px'} borderTopRightRadius={'8px'}/>
            <Flex flexDirection={'column'}>
                <Text color={'gray.700'} fontSize={'1.5rem'} fontWeight={'900'} textAlign={'center'} m={'16px 0'}>{title}</Text>
                <HStack spacing={'5px'} justify={'center'}>    
                {imgGrid.map(image => (
                    <Image maxW={'70px'} maxH={'70px'} src={`${image}`} border={'1px solid #eee'} m={'3px'} borderRadius={'8px'}/>
                    )
                )}
                </HStack>
                {linkLoja && (<Link color={'gray.300'} fontWeight={'600px'} fontSize={'0.940rem'} textAlign={'center'} m='22px 0 15px' href={linkLoja}>Ver mais</Link>)}
            </Flex>
        </Flex>
    )
}