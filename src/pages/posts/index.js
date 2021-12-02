import { NavBar } from "../../components/navbar"
import photo_profile from "../../assets/Cíntia Lorenzzo.jpg"
import facebook from "../../assets/icons/Icon awesome-facebook-square.svg"
import instagram from "../../assets/icons/Icon awesome-instagram.svg"
import twitter from "../../assets/icons/Icon awesome-twitter-square.svg" 
import photo_post from "../../assets/Esqueci minha senha.jpg"
import "./index.scss"
import { PreviewPost } from "../../components/previewpost"
import { ButtonWhite } from "../../components/button"
import { BottomPage } from "../../components/bottompage"
import { PopularPublication } from "../../components/popularpublication"
import { useContext } from "react"
import UserContext from "../../components/useContext/userContext.js"

export default function Posts() {

    const {user, setUser} = useContext(UserContext)
    const Admin = sessionStorage.getItem('admin')

    if (!user || !Admin) {
        setUser("")
        sessionStorage.setItem('admin', "")
    }

    const paramsNavbar = {
        text_1: "Página Inicial",
        link_1: "/",
        text_2: Admin!== "null"&Admin!==""?"Publicações":"Sobre Nós",
        link_2: Admin!== "null"&Admin!==""?"/create-post":"/",
        text_3: Admin!== "null"&Admin!==""?"Usuários":"Fale Conosco",
        link_3: "/",
        text_4: Admin!== "null"&Admin!==""?"Denúncias":user!==""?"Minha Conta":"Entrar",
        link_4: user!==""?"/perfil":"/login",
        text_5: user!==""?"Sair":"",
        text_6: Admin!== "null"&Admin!==""?"Mensagens":"",
        link_6: Admin!== "null"&Admin!==""?"/":"",
        emphasis_t1: true
    }

    return (
        <div className="posts-body">
            <NavBar props={paramsNavbar}/>
            <div className="main">
                <div className="main-left">
                    <input className="main-left__input"/>
                    <div className="main-left__description">
                        <img className="description-photo" src={photo_profile} alt="foto-de-perfil"/><br/>
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
                    <div className="main-left__popularPublication">               
                        <PopularPublication props={paramsPublication}/>
                        <PopularPublication props={paramsPublication_2}/>
                        <PopularPublication props={paramsPublication_2}/>
                    </div>
                    <ButtonWhite>Ver todas</ButtonWhite>
                </div>
                <div className="main-right">
                    <div className="main-right__title">
                        <span className="title-span-1">Miau!</span><br/>
                        <span className="title-span-2">Seja bem-vinda(o) ao blog PetGatô! Confira nosso conteúdo mais recente:</span>
                    </div>
                    <div className="main-right__posts">
                        <PreviewPost props={ParamsPost} user_id={sessionStorage.getItem('id')} post_id={3}/>
                        <PreviewPost props={ParamsPost} user_id={sessionStorage.getItem('id')} post_id={3}/>
                        <PreviewPost props={ParamsPost} user_id={sessionStorage.getItem('id')} post_id={3}/>
                        <PreviewPost props={ParamsPost} user_id={sessionStorage.getItem('id')} post_id={3}/>
                        <PreviewPost props={ParamsPost} user_id={sessionStorage.getItem('id')} post_id={3}/>
                    </div>
                    <div className="main-right__button">
                        <ButtonWhite className="button-white">PUBLICAÇÕES ANTERIORES</ButtonWhite>
                    </div>
                </div>
            </div>
            <BottomPage/>
        </div>
    )
}

const ParamsPost = {
    photo: photo_post,
    tags: ["cuidados", "Cães & Gatos", "Guias"],
    title: "As almofadas são importantes: guia definitivo de cuidados com as patas",
    message: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o asfalto parece que dá pra fritarum ovo. Se dá pra fazer uma fritura, imagina o que isso pode fazer com apatinha do seu pet? Essa é só uma das situações",
    messages: "4",
    views: "88"
}

const paramsPublication = {
    first: true,
    title: "As almofadinhas são importantes: guia definitivo de cuidados com as patas",
    text: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o...",
    date: "Publicado em 08 de outubro de 2019"
}

const paramsPublication_2 = {
    first: false,
    title: "As almofadinhas são importantes: guia definitivo de cuidados com as patas",
    text: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o...",
    date: "Publicado em 08 de outubro de 2019"
}