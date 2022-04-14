import { Box, Flex,Image,Text } from "@chakra-ui/react";

interface BenefitsItemProps{
    title: string,
    subTitle?: string,
    company: string,
    imgUrl: string,
    logo: string
}

export function BenefitsItem({title, subTitle, company, imgUrl, logo}: BenefitsItemProps){
    return (
        <Flex pos={'relative'} maxH={'250px'} maxW={'384px'} boxShadow={'0 2px 15px 0 rgb(0 0 0 / 10%)'}>
            <Box>
                <Image borderRadius={'8px'} src={`${imgUrl}`} alt="" />
            </Box>
            <Flex pos={'absolute'} bottom={'0'} left={0} p={'16px'} w={'100%'} align={'end'}>
                <Image w={'80px'} h={'80px'} borderRadius={'8px'} src={`${logo}`} alt="" />
                <Flex flexDirection={'column'} color={'white'} pl={'15px'} lineHeight={1.2} letterSpacing={0.5}>
                    {subTitle &&(
                    <Text fontSize={'0.75rem'}>{subTitle}</Text>
                    )}
                    <Text fontWeight={'600'} fontSize={'1.25rem'}>{title}</Text>
                    <Text fontSize={'1.125rem'}>{company}</Text>
                </Flex>
            </Flex>
        </Flex>  
    )
}