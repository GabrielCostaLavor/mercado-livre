import { Grid } from "@chakra-ui/react";
import { BiCar } from "react-icons/bi";
import styleClass from "./index.module.scss"


export function CategoryGrid2(){
    return(
        <Grid 
            h={'340px'}
            gridTemplateRows={'repeat(2, 1fr)'}
            gridTemplateColumns={'repeat(7, 1fr)'}
            gap={1}
            >
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
                <div className={styleClass.categoryItem}>
                    <BiCar className={styleClass.categoryIcon}/>
                    <div className={styleClass.categoryTitle}><h2>Carros, Motos e Outros</h2></div>
                </div>
        </Grid>
    )
}