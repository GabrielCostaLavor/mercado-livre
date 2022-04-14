import { Box, Button, Flex,Text } from "@chakra-ui/react";
import styleClass from "./index.module.scss"

export function SingInBenefits(){
    return(
        <Box className="container" p={'40px 0px'}>
            <Flex ml={'10px'} bg={'linear-gradient(90deg,#a90f90 55%,#0c1a51)'} color={'white'} p={'16px 24px'} justifyContent={'space-between'} borderTopRightRadius={'8px'} borderTopLeftRadius={'8px'}>
                <Flex align={'center'}><Text fontSize={'1.625rem'} fontWeight={'600'} lineHeight={'30px'}>Assine o nível 6</Text></Flex>
                <Flex flexDirection={'column'} fontSize={'0.875rem'} lineHeight={'1'} borderLeft={'1px solid white'} pl={'8px'} fontWeight={'500'}>
                    <Text>A partir de</Text>
                    <Flex><Text fontSize={'1.5rem'}>R$ 19.90</Text><Text>/mês</Text></Flex>
                    <Text>Conforme seu nivel</Text>
                </Flex>
            </Flex>
            <Flex ml={'10px'} flexDirection={'column'} p={'24px'} bg={'white'} color={'black'}>
                <Flex pb={'24px'}>Conte com os melhores benefícios no Mercado Livre e do Mercado Pago</Flex>
                <Flex>
                    <Flex align={'center'} flex={4}>
                        <img className={styleClass.imgBenefits} src="d+.svg" alt="" />
                        <Text  ml={'15px'} lineHeight={'1'} letterSpacing={'0.5px'}>Disney+ sem custo</Text>
                    </Flex>
                    <Flex align={'center'} flex={4}>
                        <img className={styleClass.imgBenefits} src="star+.svg" alt="" />
                        <Text  ml={'15px'} lineHeight={'1'} letterSpacing={'0.5px'}>Star+ sem custo</Text>
                    </Flex>
                    <Flex align={'center'} flex={4}>
                        <img className={styleClass.imgBenefits} src="truckgiftv4@2x.png" alt="" />
                        <Text  ml={'15px'} lineHeight={'1'} letterSpacing={'0.5px'}>Frete grátis e rápido a partir de R$ 79 e 45% OFF em fretes de menos de R$ 79</Text>
                    </Flex>
                    <Flex align={'center'} flex={4}>
                        <img className={styleClass.imgBenefits} src="qrx2.png" alt="" />
                        <Text  ml={'15px'} lineHeight={'1'} letterSpacing={'0.5px'}>Mais descontos no Mercado Pago</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex ml={'10px'} bg={'white'} justifyContent={'end'} p={'15px 24px'} borderTop={'1px solid #efefef'} borderBottomLeftRadius={'8'} borderBottomRightRadius={'8'}>
                <Button bg={'blue'} color={'white'} fontWeight={'200'} w={'96px'} h={'48px'} _hover={{bg: 'blue', filter: 'brightness(0.9)'}}>Assine</Button>
            </Flex>
        </Box>
    )
}