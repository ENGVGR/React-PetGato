import { NavBar } from "../../components/navbar"
import foto from "../../assets/Cíntia Lorenzzo.jpg"
import facebook from "../../assets/icons/Icon awesome-facebook-square.svg"
import instagram from "../../assets/icons/Icon awesome-instagram.svg"
import twitter from "../../assets/icons/Icon awesome-twitter-square.svg" 
import "./index.scss"
import { Post } from "../../components/post"

export default function Posts() {

    const params = {
        text_1: "Página Inicial",
        link_1: "/",
        text_2: "Sobre Nós",
        link_2: "/",
        text_3: "Fale Conosco",
        link_3: "/",
        text_4: "Entrar",
        link_4: "/",
        emphasis_t1: true
    }

    return (
        <div className="posts-body">
            <NavBar props={params}/>
            <div className="main">
                <div className="main-left">
                    <input className="main-left__input"/>
                    <div className="main-left__description">
                        <img className="description-photo" src={foto} alt="foto-de-perfil"/><br/>
                        <span className="description-span-1">SOBRE A AUTORA</span><br/>
                        <span className="description-span-2">Cíntia Lorenzzo</span><br/>
                        <span className="description-span-3">
                            Sou veterinária há 5 anos, apaixonada pelo mundo animal, 
                            principalmente os que estão sempre conosco no dia a dia.
                            Quando não estou no meu consultório ou com meus pets, 
                            estou aqui escrevendo conteúdo para vocês. Espero que você goste!
                        </span><br/>
                        <img className="description-icon" src={facebook} alt="facebook"/>
                        <img className="description-icon" src={instagram} alt="instagram"/>
                        <img className="description-icon" src={twitter} alt="twitter"/>

                    </div>
                </div>
                <div className="main-right">
                    <div className="main-right__title">
                        <span className="title-span-1">Miau!</span><br/>
                        <span className="title-span-2">Seja bem-vinda(o) ao blog PetGatô! Confira nosso conteúdo mais recente:</span>
                    </div>
                    <div className="main-right__posts">
                        <Post/>
                    </div>
                </div>
            </div>
        </div>
    )
}