import { ShoppingInformation } from "./ShoppingInformation"
import styleClass from "./style.module.scss"

export function ProdColumn(){

    const store = {
        img: "store.jpg",
        name: 'consul',
        sales: 2000,
        storeLocale: "Mercado Livre" 
    }
    const freteValue = Number(30).toLocaleString("pt-BR", {style: 'currency', currency: 'brl'})
    return(
        <div className={styleClass.prodColumn}>
            <ShoppingInformation img={store.img} name={store.name} sales={store.sales} frete={freteValue}/>
        </div>
    )
}