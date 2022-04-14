import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

interface CheckBannerItemProps{
    subTitle: string,
    title: string,
    title2: string,
    imgUrl: string
}

export function CheckBannerItem({title, title2, subTitle, imgUrl}: CheckBannerItemProps){
    return(
        <Flex  bg={'white'} w={['100%', '50%']} justifyContent={'space-between'} borderRadius={'8px'}>
            <Flex
            flexDirection={'column'}
            p={'32px 0 32px 32px'}
            color={'gray.900'} 
            justifyContent={'center'}
            boxShadow={'0 2px 15px 0 rgb(0 0 0 / 10%)'}
            >
                <Text fontSize={'0.75rem'} mb={'12px'} letterSpacing={'3px'} textTransform={'uppercase'}>{subTitle}</Text>
                <Text fontSize={'1.75rem'} fontWeight={'bold'} lineHeight={'1.2'} textTransform={'uppercase'}>{title}</Text>
                <Text fontSize={'1.75rem'} fontWeight={'bold'} lineHeight={'1.2'} textTransform={'uppercase'}>{title2}</Text>
                <Button fontSize={'0.875rem'} bg={'blue'}
                color={'white'} w={'96px'} lineHeight={'1px'} textTransform={'capitalize'} pt={'4px'}
                mt={'10px'}
                borderRadius={'0'}>ver mais</Button>
            </Flex>
            <Box>
                <Image  height={'250px'} minW={'290px'} src={`${imgUrl}`} borderRadius={'8px'}/>
            </Box>
        </Flex>
    )
}