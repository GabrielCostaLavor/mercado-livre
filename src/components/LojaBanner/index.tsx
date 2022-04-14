import { Box, Flex } from "@chakra-ui/react";
import { Title } from "../Title";
import { LojaBannerItem } from "./LojaBannerItem";

export function LojaBanner(){
    return(
        <Box className="container" pt={'40px'} pb={'70px'} mb={'30px'} >
            <Title title="As melhores lojas te esperam" titleLink="Ver Lojas" link="#" />
            <Flex>
                <LojaBannerItem 
                imgBackground="background_home201712070342.jpg" 
                imgLogoLoja="logoLoja.webp" 
                imgGrid={["ferro.webp", "ferro.webp", "ferro.webp"]} 
                title="Fast Shop"
                linkLoja="#"
                />
                <LojaBannerItem 
                imgBackground="background_home201712070342.jpg" 
                imgLogoLoja="logoLoja.webp" 
                imgGrid={["ferro.webp", "ferro.webp", "ferro.webp"]} 
                title="Fast Shop"
                linkLoja="#"
                />
                <LojaBannerItem 
                imgBackground="background_home201712070342.jpg" 
                imgLogoLoja="logoLoja.webp" 
                imgGrid={["ferro.webp", "ferro.webp", "ferro.webp"]} 
                title="Fast Shop"
                linkLoja="#"
                />
                <LojaBannerItem 
                imgBackground="background_home201712070342.jpg" 
                imgLogoLoja="logoLoja.webp" 
                imgGrid={["ferro.webp", "ferro.webp", "ferro.webp"]} 
                title="Fast Shop"
                linkLoja="#"
                />
            </Flex>
        </Box>
    )
}