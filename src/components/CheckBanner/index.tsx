import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { CheckBannerItem } from "../CheckBannerItem";

export function CheckBanner(){
    return(
        <Box className="container" py={'40px'}>
            <Box><Text color={'#666'} fontSize={'1.625rem'} fontWeight={'200'} pr={'10px'} mb={'22px'} lineHeight={1}>Confira</Text></Box>
            <Flex>
                <HStack spacing={'15px'} w={'100%'}>
                    <CheckBannerItem
                      subTitle="Moda e esportes" 
                      title="24 horas"
                      title2="de ofertas"
                      imgUrl="check.webp"
                      />
                    <CheckBannerItem
                      subTitle="CASA, MÓVEIS E DECORAÇÃO" 
                      title="UM SHOW"
                      title2="DE OFERTAS"
                      imgUrl="checkBanner1.webp"
                      />
                </HStack>
            </Flex>
        </Box>
    )
}