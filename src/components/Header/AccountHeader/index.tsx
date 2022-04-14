import { Box, Flex, HStack } from "@chakra-ui/react"
import {AiOutlineShoppingCart as Cart } from "react-icons/ai"

export function AccountHeader(){
    return (
        <Flex fontSize={'0.8rem'} color={'#222'} flex={4} justifyContent={'right'}>
            <HStack spacing={'20px'}>
            <Box><button>Criar Conta</button></Box>
            <Box><button>Entre</button></Box>
            <Box>Compras</Box>
            <Cart fontSize={'20px'}/>
            </HStack>
        </Flex>
    )
}