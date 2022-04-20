import styleClass from "./style.module.scss"
import {BsShieldCheck, BsTrophy} from "react-icons/bs"
import {FiTruck, FiShield} from "react-icons/fi"

interface ShoppingInformationProps{
    img: string,
    name: string,
    sales: number,
    frete: string
}

export function ShoppingInformation({img, frete, name, sales} : ShoppingInformationProps){
    return(
        <div className={styleClass.shoppingInformation}>
            <div className={styleClass.address}>
                <div className={styleClass.img}><FiTruck /></div>
                <div className={styleClass.text}>
                Chegará <span className={styleClass.locale}>sexta-feira 6 de maio</span> por <span>{frete}</span>
                <a href="#"><FiShield /><span>Enviar para Redenção 62790000</span></a>
                </div>
            </div>
            <div className={styleClass.store}>
                <img src={`../../../../${img}`} alt="" />
                <div className={styleClass.storeContent}>
                    <h2>Loja oficial <span>{name}</span></h2>
                    <p>{sales} vendas</p>
                </div>
            </div>
            <div className={styleClass.stock}>
                <h2 className={styleClass.title}>Estoque disponível</h2>
            </div>
            <div className={styleClass.buttons}>
                <button className={styleClass.buyNow}>Comprar agora</button>
                <button className={styleClass.addCart}>Adicionar ao carrinho</button>
            </div>
            <div className={styleClass.conquest}>
                <ul>
                    <li className={styleClass.conquestContent}>
                        <div className={styleClass.conquestImg}>
                            <BsShieldCheck />
                        </div>
                        <div className={styleClass.conquestText}>
                            <span>Compraa Garantida</span> receba o produto que está esperando ou devolvemos o dinheiro.
                        </div>
                    </li>
                    <li className={styleClass.conquestContent}>
                        <div className={styleClass.conquestImg}>
                            <BsTrophy />
                        </div>
                        <div className={styleClass.conquestText}>
                            <span>Compraa Garantida</span> receba o produto que está esperando ou devolvemos o dinheiro.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}