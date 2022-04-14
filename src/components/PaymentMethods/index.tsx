import { Box, Flex, Link, Text } from "@chakra-ui/react";

export function PaymentMethods(){
    return (
        <Flex className="container" h={'90px'} bg={'#fff'} align={'center'} boxShadow={'0 1px 1px 0 rgb(0 0 0 / 10%)'} my={'35px'} pos={'relative'} borderRadius={'4px'} justifyContent={'space-between'}> 
            <Flex>
                <Box borderRight={'1px solid #eee'} p={'19px'} _before={{content:'""', display: 'block', h: '80px', w: '3px', background: "blue", pos: "absolute", left: '4px', top: '6px'}}>
                    <Text color='#333333' fontSize={'1.125rem'}>Pagamento rápido e seguro</Text>
                    <Text color={'gray.300'} fontSize={'0.875rem'}>com Mercado Pago</Text>
                </Box>
                <Flex p={'19px'}>
                    <Box mr={'16px'}>
                        <img src="credit-card.svg" alt="" height={'58px'} width={'48px'}/>
                    </Box>
                    <Box>
                        <Text color={'black'} fontSize={'1.125rem'}>Até 12 vezes sem juros</Text>
                        <Link color={'blue'} fontSize={'0.875rem'}  href="#">Ver mais</Link>
                    </Box>
                </Flex>
                <Flex p={'19px'}>
                    <Box mr={'16px'}>
                        <img src="mercado-creditsv2.svg" alt="" height={'58px'} width={'48px'}/>
                    </Box>
                    <Box>
                        <Text color={'black'} fontSize={'1.125rem'} >Parcelado no boleto</Text>
                        <Link color={'blue'} fontSize={'0.875rem'} href="#">Conheça o Mercado Crédito</Link>
                    </Box>
                </Flex>
                <Flex p={'19px'}>
                    <Box mr={'16px'}>
                        <img src="pix.svg" alt="" height={'58px'} width={'48px'}/>
                    </Box>
                    <Box>
                        <Text color={'black'} fontSize={'1.125rem'} >Via Pix</Text>
                        <Link color={'blue'} fontSize={'0.875rem'} href="#">Ver mais</Link>
                    </Box>
                </Flex>
            </Flex>
            <Flex pr={'40px'}>
                <img src="add.svg" alt="" height={'58px'} width={'48px'}/>
            </Flex>
        </Flex>
    )
}