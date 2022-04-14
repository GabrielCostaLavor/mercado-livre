import { Box, Flex, Link, Stack, transition, VStack } from "@chakra-ui/react";
import {AiOutlineDown as ArrowDowm} from "react-icons/ai"
import {MdArrowDropUp} from "react-icons/md"

interface SubMenuProps{
    nome: String,
    url: String,
    nameId: string
}

interface NavItemProps{
    nome: String,
    url: String,
    subMenu?: SubMenuProps[],
}

export function NavItem({nome, url, subMenu}: NavItemProps){
    return (
        <Box role='group' pos={'relative'}>
            <Flex pos={'relative'} role='group'>
                    <Link href={`${url}`} color={'gray.300'} fontSize={'0.85rem'}>{nome}</Link>
                    {subMenu ? (<Box pos={'absolute'} right={'-15'} bottom={0} cursor={'pointer'}><ArrowDowm fontSize={'13px'}/></Box>) : (<></>)}
                    {subMenu && (
                        <Box pos={'absolute'} right={'-26'} bottom={'-25px'} _groupHover={{display:'block'}} display={'none'}><MdArrowDropUp color="#222" fontSize={'35px'}/></Box>
                    )}
            </Flex>
            {subMenu && (
            <Box _groupHover={{display:'block'}} display={'none'}>
                <Box
                as="ul"
                listStyleType={'none'}
                pos={'absolute'}
                width={'260px'}
                bg={'#222'}
                color={'#fff'}
                mt={10}
                p={'35px 35px'}
                borderRadius={'5px'}
                transition={'hover 1s'}
                left={'-80px'}
                zIndex={1}
                >
                <VStack spacing={15} align={'start'}>
                {subMenu? subMenu.map(item => {
                return (
                        <Box as="li" key={item.nameId} fontSize={'13px'} fontWeight={'400'} textAlign={'left'}><a href={`${item.url}`}>{item.nome}</a></Box>
                )
                }): <></>}
                </VStack>
                </Box>
            </Box>
            )}
        </Box>
    )
}