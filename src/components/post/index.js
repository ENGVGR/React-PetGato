import foto from "../../assets/Esqueci minha senha.jpg"
import { Like, Message, Views } from "../actions"
import { ButtonWhite } from "../button"
import "./index.scss"

const Post = (props) => {
    
    return (
        <div className="post-body">
            <img className="body-img" src={foto} alt="foto"/>
            <div className="main">
                <div className="main-tags">
                    <span className="main-tags__span-1">Tags:</span>
                    <span className="main-tags__span-2">cuidados</span>
                    <span className="main-tags__span-2">Cães & Gatos</span>
                    <span className="main-tags__span-2">Guias</span>
                </div>
                <div className="main-title">
                    <span className="main-title__span">
                        As almofadas são importantes: guia 
                        definitivo de cuidados com as patas
                    </span>
                </div>
                <div className="main-text">
                    <span className="main-text__span">
                        São 3 da tarde e você já pega a coleira para passear com seu companheiro 
                        de caminhada. Tá aquele sol do cão e o asfalto parece que dá pra fritar
                        um ovo. Se dá pra fazer uma fritura, imagina o que isso pode fazer com a
                        patinha do seu pet? Essa é só uma das situações
                    </span>
                </div>
                <div className="main-buttons">
                    <div>
                        <ButtonWhite className="main-buttons__white">Leia mais</ButtonWhite>
                    </div>
                    <div className="main-buttons__actions">
                        <Like className="like"/>
                    </div>
                    <div className="main-buttons__actions">
                        <Message/>
                    </div>
                    <div className="main-buttons__actions">
                        <Views/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Post }