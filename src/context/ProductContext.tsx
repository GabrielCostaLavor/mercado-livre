import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../service/api";

interface ProductProps{
    id: number,
    title: string,
    price: number,
    category: string,
    image: any,
    description: string
}

interface ProductContextProviderProps{
    children: ReactNode,
}

export const ProductContext = createContext<ProductProps[]>([])

export function ProductContextProvider({children} : ProductContextProviderProps){
    
    const [product, setProduct] = useState<ProductProps[]>([])

    useEffect(() => {
        api.get(`https://fakestoreapi.com/products/`)
        .then(response => setProduct(response.data))
    },[])


    return(
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}