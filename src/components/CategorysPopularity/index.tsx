import { Box, Grid } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { Title } from "../Title";
import { CategoryGrid1 } from "./CategoryGrid1";
import { CategoryGrid2 } from "./CategoryGrid2";
import { CategoryGrid3 } from "./CategoryGrid3";


export function CategorysPopularity(){
    return(
        <Box className="container">
            <Title title="Categorias populares" />
            <Carousel
            wrapAround = { true } 
            slidesToShow = { 1 } 
            >
             <CategoryGrid1 />   
             <CategoryGrid2 />   
             <CategoryGrid3 />   
            </Carousel>
        </Box>
    )
}