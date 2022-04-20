import {Box, Flex, Img, Input, Text} from "@chakra-ui/react"
import { NavItem } from "./NavItem"
import { AccountHeader } from "./AccountHeader"
import {FaMapMarkerAlt ,FaSistrix} from "react-icons/fa"
export function Header(){
    const categoria = [
        {
            nome: "Veiculos",
            url: "#"
        }

    ]
    return(
        <Box as="header" className={'header'} bg={"#fff159"}>
            <Flex className={"container  menuTop"} justifyContent={'space-between'} py={'0.55rem'}>
                <Box className={'logo'} flex={2}>
                    <img src='/logo.png' alt="" />
                </Box>
                <Box className={'serach'} flex={6} pos={'relative'} w={'590px'} maxW={'590px'} >
                    <Input type='search' placeholder="Buscar produtos, marcas e muito mais" fontSize={'0.9rem'} boxShadow={'0 1px 2px 0 rgb(0 0 0 / 20%)'} px={'1rem'} w={'590px'} maxW={'590px'} height={'38px'} _placeholder={{color: 'gray.300'}} bg={'white'} border={'none'} borderRadius={'2px'}/>
                    <Flex pos={'absolute'} top={0} right={0} height={38} align={'center'} px={15}>
                        <Box height={'26px'} borderLeft={'1px solid #e2e8f0' } pl={3}></Box><FaSistrix fontSize={'20px'} />
                    </Flex>
                </Box>
                <Box className={'discountHeader'} flex={4} justifyContent={'right'}>
                    <Img src="/renove.webp" maxW={'340px'} maxH={'39px'} ml={'auto'}></Img>
                </Box>
            </Flex>
            <Flex className={"container navigation"} justifyContent={'space-between'} align={'end'} pb={'10px'}>
                <Box className="address" flex={2}>
                    <img src="" alt="" />
                    <Flex>
                        <Box><FaMapMarkerAlt fontSize={'21px'}/></Box>
                        <Flex flexDirection={'column'}> 
                            <Text fontSize='12px' lineHeight={'1'} color={'0'}>Enviar para</Text>
                            <Text fontSize={'14px'} color={'#222'}>endereço</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Flex as="nav" className={'menuHeader'} flex={6} justifyContent={'space-between'}>
                    <NavItem nome={"Categorias"} url={"#"} 
                    subMenu={[
                        {nome: "Veiculos", url: "#", nameId: "veiculos1"}, 
                        {nome: "Veiculos", url: "#", nameId: "veiculos2"},
                        {nome: "Veiculos", url: "#" , nameId: "veiculos3"},
                        {nome: "Veiculos", url: "#", nameId: "veiculos4"},
                        {nome: "Veiculos", url: "#", nameId: "veiculos5"} ]} 
                        />
                    <NavItem nome={"Ofertas do dia"} url={"#"}/>
                    <NavItem nome={"Histórico"} url={"#"}/>
                    <NavItem nome={"Supermercado"} url={"#"}/>
                    <NavItem nome={"Live"} url={"#"}/>
                    <NavItem nome={"Vender"} url={"#"}/>
                    <NavItem nome={"Contato"} url={"#"}/>
                </Flex>
                <AccountHeader />
            </Flex>
        </Box>
    )
}