import styleClass from "./style.module.scss"

interface StoreInformationProps{
    img: string,
    name: string,
    storeLocale: string
}

export function StoreInformation({img, name, storeLocale}:StoreInformationProps){
    return(
        <div className={styleClass.storeInformation}>
        <div className={styleClass.title}>
            <h2>Informações da loja</h2>
        </div>
        <div className={styleClass.store}>
                <img src={`../../../../${img}`} alt="" />
                <div className={styleClass.storeContent}>
                    <h2><span>{name}</span></h2>
                    <p>Loja oficial no {storeLocale}</p>
                </div>
            </div>
        </div>
    )
}