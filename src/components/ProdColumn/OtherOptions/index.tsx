import styleClass from "./style.module.scss"

interface OtherOptionsProds{
    price: number,
    frete: string,
    nameStore: string,
    sales: number
}

export function OtherOptions({price, frete, nameStore, sales}:OtherOptionsProds){

    const priceFinal = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const priceParcel = (price / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    return(
        <div className={styleClass.OtherOptions}>
            <div className={styleClass.title}>
                <h2>Outras opções de compra</h2>
            </div>
            <div className={styleClass.content}>
                <div className={styleClass.price}>
                    <div>{priceFinal}</div>
                    <span>Melhor preço</span>
                </div>
                <div className={styleClass.buyContent}>
                    <div className={styleClass.priceParcel}>10x {priceParcel} sem juros</div>
                    <div className={styleClass.frete}>Chegará <span>sexta-feira 13 de maio</span> por {frete}</div>
                    <div className={styleClass.store}>
                        <div className={styleClass.storeTitle}>loja oficial <span>{nameStore}</span></div>
                        <div>{sales} vendas</div>
                    </div>
                    <div className={styleClass.buttons}>
                        <button className={styleClass.buyNow}>Comprar agora</button>
                        <button className={styleClass.addCart}>Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
            <div className={styleClass.footer}>
                Ver mais opções a partir de {price}
            </div>
        </div>
    )
}