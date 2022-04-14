import { Box } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import styleClass from "./banner.module.scss"

export function Banner(){
    return(
        <div className="containerBanner">
            <Carousel wrapAround = { true } 
            slidesToShow = { 1 } 
            className={styleClass.carousel}
            >
                <img src="D_NQ_788778-MLA49614715401_042022-OO.webp" alt="" />
                <img src="D_NQ_808624-MLA49610186492_042022-OO.webp" alt="" />
                <img src="D_NQ_997850-MLA49578900153_042022-OO.webp" alt="" />

            </Carousel>
        </div>
    )
}