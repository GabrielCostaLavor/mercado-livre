import { Flex,Link,Text } from "@chakra-ui/react";

interface TitleProps{
    title: string,
    titleLink?: string,
    link?: string
}
export function Title({title, link, titleLink}: TitleProps){
    return(
        <Flex align={'end'} mb={'22px'} lineHeight={'0.8'}>
            <Text color={'#666'} fontSize={'1.625rem'} fontWeight={'200'} pr={'10px'} >{title}</Text>
            {link && (
                <Link href={`${link}`} color={'blue'} fontSize={'0.875rem'}>{titleLink}</Link>
            )}
        </Flex>
    )
}