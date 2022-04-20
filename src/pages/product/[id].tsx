import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import { api } from "../../service/api"
import styleClass from "./style.module.scss"
import {AiFillStar} from "react-icons/ai"

interface GetProductProps{
    id: number,
    title: string,
    price: number,
    category: string,
    image: any,
    description: string
}

interface ProductProps{
    result : {
        prodId: number
    }
}


export default function prod( {result}:ProductProps){

    const [product, setProduct] = useState<GetProductProps[]>([])

    useEffect(() => {
        api.get(`https://fakestoreapi.com/products/${result.prodId}`)
        .then(response => setProduct(response.data)
    )})
       const priceTest =  1000
       const priceFinal = priceTest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
       const priceParcel = (priceTest / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return(
        <div className={styleClass.product + " container"}>
            <div className={styleClass.prodDetails}>
                <div className={styleClass.prodItem}>
                    <div className={styleClass.prodImg}>
                        <img src={`${product.image}`} alt="" />
                    </div>
                    <div className={styleClass.prodContent}>
                        <h3 className={styleClass.productSubtitle}>NOVO | 300 vendidos</h3>
                        <h1 className={styleClass.productTitle}>{product.title}</h1>
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
                                <a href="#" className={styleClass.moreCharacteristics}></a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className={styleClass.prodColumn}>

            </div>
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
    const result = {
        prodId
    }
    
    return {
        props:{
            result
        },
        redirect: 60 * 60 //uma hr

    }
}