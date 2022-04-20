import styleClass from "./style.module.scss"


export function FooterTop(){
    return(
        <div className={styleClass.footerTop}>
            <div className={styleClass.footerTopContainer + " container"}>
                <div className={styleClass.footerItem}>
                    <div className={styleClass.footerIcon}>
                        <img src="payment.svg" alt="" />
                    </div>
                    <div className={styleClass.footerContent}>
                        <h1>Escolha como pagar</h1>
                        <p>Com o Mercado Pago, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x no boleto com o Mercado Crédito.</p>
                        <a href="#">Como pagar com Mercado Pago</a>
                    </div>
                </div>
                <div className={styleClass.footerItem}>
                    <div className={styleClass.footerIcon}>
                        <img src="caixa.svg" alt="" />
                    </div>
                    <div className={styleClass.footerContent}>
                        <h1>Frete grátis a partir de R$ 79</h1>
                        <p>Só por estar cadastrado no Mercado Livre, você tem frete grátis em milhares de produtos. É um benefício do Mercado Pontos.</p>
                        <a href="#">Saiba mais sobre este benefício</a>
                    </div>
                </div>

                <div className={styleClass.footerItem}>
                    <div className={styleClass.footerIcon}>
                        <img src="escudo.svg" alt="" />
                    </div>
                    <div className={styleClass.footerContent}>
                        <h1>Segurança, do início ao fim</h1>
                        <p>Você não gostou do que comprou? Devolva! No Mercado Livre não há nada que você não possa fazer, porque você está sempre protegido.</p>
                        <a href="#">Como te protegemos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}