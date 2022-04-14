import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { Title } from "../Title";
import { BenefitsItem } from "./BenefitsItem";

export function Benefits(){
    return(
        <Box className="container" p={'40px 0px'}>
            <Title title="Benefícios do Mercado Pontos" titleLink="Ver todos os benefícios" link="#"/>
            <Carousel wrapAround = { true } 
            slidesToShow = { 3 } 
            className={'carouselProds'}>
                <BenefitsItem title="Receba aqui os melhores benefícios" imgUrl="disney-nivel6-mlc-mlb@2x.png" logo="comboplus-brand.png" company="Assinando o nível 6" />
                <BenefitsItem title="Assine e receba até 60% OFF" imgUrl="hbo-max-mlb-mlm@2x.jpg" logo="logoSquare@2x.png" company="HBO Max" subTitle="7 DIAS GRÁTIS" />
            </Carousel>
        </Box>
    )
}