import { GetStaticProps } from "next"
import styleClass from "./style.module.scss"
import {AiFillStar} from "react-icons/ai"
import { ProdColumn } from "../../components/ProdColumn"


interface ProductProps{
    data : {
        id: number,
        title: string,
        price: number,
        category: string,
        image: any,
        description: string
        }
}


export default function prod( {data}:ProductProps){


    const price =  Number(data.price)
    const priceFinal = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const priceParcel = (price / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return(
        <div className={styleClass.product + " container"}>
            <div className={styleClass.prodDetails}>
                <div className={styleClass.prodItem}>
                    <div className={styleClass.prodImg}>
                        <img src={`${data.image}`} alt="" />
                    </div>
                    <div className={styleClass.prodContent}>
                        <h3 className={styleClass.productSubtitle}>NOVO | 300 vendidos</h3>
                        <h1 className={styleClass.productTitle}>{data.title}</h1>
                        <div className={styleClass.prodOpnions}>
                            <div className={styleClass.prodItemIcons}>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <h3>381 opniões</h3>
                        </div>
                        <div className={styleClass.BestSellers}>
                            <a href="#" className={styleClass.Best}>Mais vendidos</a>
                            <a href="#" className={styleClass.bestConsl}>2º em Fogões Consul</a>
                        </div>
                        <div className={styleClass.price}>
                            <div className={styleClass.priceFinal}>
                                {priceFinal}
                            </div>
                            <div className={styleClass.priceParcel}>
                               em <span>{"10x" + priceParcel} sem juros</span>
                            </div>
                            <a href="#" className={styleClass.paymentOptions}>Ver os meios de pagamento</a>
                        </div> 
                        <div className={styleClass.ProdCharacteristics}>
                            <div className={styleClass.ProdCharacteristicsTitle}>
                                <h2>O que você precisa saber sobre este produto</h2>
                            </div>
                            <div className={styleClass.ProdCharacteristicsContent}>
                                <ul>
                                    <li>Fogão de piso.</li>
                                    <li>Tipo de alimentação: gás/elétrico.</li>
                                    <li>Conta com luz interior para controlar o cozimento.</li>
                                    <li>Com acendimento automático para maior conforto.</li>
                                    <li>Tem 4 queimadores.</li>
                                    <li>Grades de ferro fundido.</li>
                                    <li>Com termostato.</li>
                                    <li>Dimensões: 51.8cm de largura, 94.8cm de altura e 60.3cm de profundidade.</li>
                                </ul>
                                <a href="#" className={styleClass.moreCharacteristics}>Ver caracteristica</a>
                            </div>
                        </div>
                        <div className={styleClass.purchaseOptions}>
                            <h2>Opções de compra:</h2>
                            <a href="#">18 produtos novos a partir de {priceFinal}</a>
                        </div>
                    </div>
                </div>
                <div className={styleClass.row}></div>
                <div className={styleClass.description}>
                    <h2>Descrição</h2>
                    <p>{data.description}</p>
                </div>
            </div>
                <ProdColumn price={price}/>
        </div>
    )
}

export const getStaticPaths = () => {
    return{
        paths: [],
        fallback: 'blocking'
    }
}
export const getStaticProps: GetStaticProps = async ({params}) =>{
    
    
    
    const {id} = params
    const prodId = Number(id)
    
    const response = await fetch(`https://fakestoreapi.com/products/${prodId}`);
    const data = await response.json()

    console.log(data)
    
    return {
        props:{
            data
        },
        redirect: 60 * 60 //uma hr

    }
}