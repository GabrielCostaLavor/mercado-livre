import { OtherOptions } from "./OtherOptions"
import { PaymentOptions } from "./PaymentOptions"
import { ShoppingInformation } from "./ShoppingInformation"
import { StoreInformation } from "./StoreInformation"
import styleClass from "./style.module.scss"

interface ProdColumnProps{
    price: number
}
export function ProdColumn({price}:ProdColumnProps){

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
            <StoreInformation name={store.name} img={store.img} storeLocale={store.storeLocale}/>
            <OtherOptions price={price} frete={freteValue} nameStore={store.name} sales={store.sales}/>
            <PaymentOptions />
        </div>
    )
}