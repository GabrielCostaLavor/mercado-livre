import styleClass from "./style.module.scss"
import {RiArrowUpSLine} from "react-icons/ri"
import { useState } from "react"
import { FooterColapse } from "./FooterColapse"

interface ModalProps{
    modal: boolean
}


export function Footer(){
    const [modal, setModal] = useState(false)

    function OpenModal(){
        if(modal === false) return setModal(true)
        return setModal(false)
    }

    return(
        <footer className={styleClass.footer}>
            <div className={styleClass.footerMidle}>
               <button onClick={OpenModal}>Mais informações <RiArrowUpSLine className={styleClass.buttonIcon} /></button>
               {
                   modal && (
                       <FooterColapse />
                   )
               }
            </div>

            <div className={styleClass.footerBottom + " container"}>
                <div className={styleClass.footerBottonTitle}>
                    <a href="#">Trabalhe conosco</a>
                    <a href="#">Termos e condições</a>
                    <a href="#">Como cuidamos da sua privacidade</a>
                    <a href="#">Contato</a>
                </div>
                <div className={styleClass.footerBottonContent}>
                    <p className={styleClass.copyright}>Copyright © 1999-2022 Ebazar.com.br LTDA.</p>
                    <p className={styleClass.footerCnpj}>CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</p>
                </div>
            </div>
        </footer>    
    )
}