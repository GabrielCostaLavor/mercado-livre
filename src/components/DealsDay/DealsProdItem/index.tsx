import styleClass from "./index.module.scss"
import {IoIosFlash} from "react-icons/io"

interface DealsProdItemProps{
    imgUrl: string,
    price: number,
    turn: number,
    title: string,
    fees?: boolean,
    freightFree?: boolean,
    full?: boolean,
    off?: number,
}


export function DealsProdItem ({imgUrl, price, title, turn, fees, full, off, freightFree} : DealsProdItemProps){
    const priceFinal = price.toLocaleString(
        'pt-br',{style: 'currency', currency: 'BRL'}
    )
    const priceParcel = price / turn;
    const priceResult = priceParcel.toLocaleString(
        'pt-br',{style: 'currency', currency: 'BRL'}
    )
    return(
        <div className={styleClass.dealsProdItem}>
            <img src={`${imgUrl}`} alt=""/>
            <div className={styleClass.dealsProdText}>
                <div className={styleClass.dealsPriceContent}>
                    <span className={styleClass.dealsPrice}>
                        {priceFinal}
                    </span>
                    {off && (
                    <span className={styleClass.dealsProdOff}>
                        {off}% OFF
                    </span>
                    )}
                </div>
                <div className={styleClass.dealsPromo}>
                    <span className={styleClass.dealsJuros}>
                    {turn}x R$ {priceResult} {fees? (<span>sem juros</span>): ('')}
                    </span>
                    {freightFree && (
                        <span className={styleClass.dealsFreight}>
                        Frete grátis {full ? (<span className={styleClass.dealsFull}><IoIosFlash/> FULL</span>):('')}
                        </span>
                    )}

                </div>
                <div className={styleClass.dealsProdTitle}>
                {title}
                </div>
            </div>
        </div>
    )
}