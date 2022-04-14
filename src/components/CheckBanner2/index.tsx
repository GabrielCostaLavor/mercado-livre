import { Box, HStack } from "@chakra-ui/react";
import { CheckBannerItem } from "../CheckBannerItem";
import { Title } from "../Title";

export function CheckBanner2(){
    return(
        <Box className="container" py={'40px'}>
            <Title title="Você pode se interessar" />
            <HStack spacing={'15px'} w={'100%'}>
                <CheckBannerItem imgUrl="gasolina.webp" subTitle="PEÇAS NÁUTICAS" title="ACESSÓRIOS COM" title2="ALTO DESEMPENHO"/>
                <CheckBannerItem imgUrl="compreAoVivo.webp" subTitle="as melhores ofertas" title="aproveite" title2="ao vivo"/>
            </HStack>
        </Box>
    )
}