import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { DealsProdItem } from "./DealsProdItem";
import "./index.module.scss"

export function DealsDay(){
    return (
        <Box className="container" pb={'40px'}>
            <Flex align={'end'} mb={'8px'} lineHeight={'0.8'} pb={'18px'} pt={'22px'}>
                <Text color={'#666'} fontSize={'1.625rem'} fontWeight={'200'} pr={'10px'} >Ofertas do dia</Text>
                <Link color={'blue'} fontSize={'0.875rem'}>Ver todas</Link>
            </Flex>
            <Carousel
            wrapAround = { true } 
            slidesToShow = { 5 } 
            className={'carouselProds'}
            >
                <DealsProdItem
                imgUrl="/produtos/D_NQ_788778-MLA49614715401_042022-OO.webp"
                price={199}
                off={50}
                turn={12}
                fees={true}
                title="Samsung Galaxy M52 5g Dual Sim 128 Gb White 6 Gb Ram"
                freightFree={true}
                full={false}
                />
                <DealsProdItem
                imgUrl="/produtos/D_NQ_788778-MLA49614715401_042022-OO.webp"
                price={1999}
                off={50}
                turn={12}
                fees={true}
                title="Samsung Galaxy M52 5g Dual Sim 128 Gb White 6 Gb Ram"
                freightFree={true}
                full={false}
                />
                <DealsProdItem
                imgUrl="/produtos/D_NQ_788778-MLA49614715401_042022-OO.webp"
                price={1999}
                off={50}
                turn={12}
                fees={false}
                title="Samsung Galaxy M52 5g Dual Sim 128 Gb White 6 Gb Ram"
                freightFree={true}
                full={true}
                />
                <DealsProdItem
                imgUrl="/produtos/D_NQ_788778-MLA49614715401_042022-OO.webp"
                price={1999}
                off={50}
                turn={12}
                fees={false}
                title="Samsung Galaxy M52 5g Dual Sim 128 Gb White 6 Gb Ram"
                freightFree={true}
                full={false}
                />
                <DealsProdItem
                imgUrl="/produtos/D_NQ_788778-MLA49614715401_042022-OO.webp"
                price={1999}
                off={50}
                turn={12}
                fees={true}
                title="Samsung Galaxy M52 5g Dual Sim 128 Gb White 6 Gb Ram"
                freightFree={true}
                full={true}
                />
                <DealsProdItem
                imgUrl="/produtos/D_NQ_788778-MLA49614715401_042022-OO.webp"
                price={199}
                off={50}
                turn={12}
                fees={false}
                title="Samsung Galaxy M52 5g Dual Sim 128 Gb White 6 Gb Ram"
                freightFree={true}
                full={true}
                />
            </Carousel>
        </Box>
    )
}