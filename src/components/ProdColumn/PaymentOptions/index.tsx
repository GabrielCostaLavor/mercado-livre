import styleClass from "./style.module.scss"


export function PaymentOptions(){
    return(
        <div className={styleClass.PaymentOptions}>
            <div className={styleClass.title}>
                Meios de pagamento
            </div>
            <div className={styleClass.content}>
                <div className={styleClass.ticket}>
                    <h2>Boleto parcelado em até 12x</h2>
                    <div className={styleClass.icons}>
                        <img src="/pagamento/mercadoCredito.svg" alt="" />
                    </div>
                </div>
                <div className={styleClass.creditCards}>
                    <h2>Cartões de crédito</h2>
                    <h3>¡Paga en hasta 12 cuotas!</h3>
                    <div className={styleClass.icons}>
                        <img src="/pagamento/visa.svg" alt="" />
                        <img src="/pagamento/master.svg" alt="" />
                        <img src="/pagamento/hipercard.svg" alt="" />
                        <img src="/pagamento/elo.svg" alt="" />
                    </div>
                </div>
                <div className={styleClass.debitCards}>
                    <h2>Cartões de débito</h2>
                    <div className={styleClass.icons}>
                        <img src="/pagamento/caixa.svg" alt="" />
                    </div>
                </div>
                <div className={styleClass.bankSlip}>
                    <h2>Boleto bancário</h2>
                    <div className={styleClass.icons}>
                        <img src="/pagamento/boleto.svg" alt="" />
                    </div>
                </div>
                <div className={styleClass.PaymentLink}>
                    <a href="#">Conheça outros meios de pagamento</a>
                </div>
            </div>
        </div>
    )
}