//SCSS
import "./index.scss"
//React
import { useContext, useEffect, useState } from "react"
//Components
import { PreviewPost } from "../../components/previewpost"
import { ButtonWhite } from "../../components/button"
import { BottomPage } from "../../components/bottompage"
import { PopularPublication } from "../../components/popularpublication"
import UserContext from "../../components/useContext/userContext.js"
import { NavBar } from "../../components/navbar"
//Assets
import photo_profile from "../../assets/Cíntia Lorenzzo.jpg"
import facebook from "../../assets/icons/Icon awesome-facebook-square.svg"
import instagram from "../../assets/icons/Icon awesome-instagram.svg"
import twitter from "../../assets/icons/Icon awesome-twitter-square.svg" 
//Api
import api from "../../api/api" 

export default function Posts() {

    const {user, setUser} = useContext(UserContext)
    const Admin = sessionStorage.getItem('admin')
    const [IdList, setIdList] = useState([])

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
        link_6: Admin!== "null"&Admin!==""?"/":"/",
        emphasis_t1: true
    }

    useEffect(() => {
        
        async function GetViews() {
            api.get(`/posts`)
            .then((resp) => {
                setIdList(resp.data)
            })
        } GetViews()        
    },[])

    return (
        <div className="posts">
            <><NavBar props={paramsNavbar}/></>
            <div className="posts__div">
                <div className="posts__div-left">
                    <input className="posts__div-left__input"/>
                    <div className="posts__div-left__description">
                        <img className="posts__div-left__description-photo" src={photo_profile} alt="foto-de-perfil"/><br/>
                        <span className="posts__div-left__description-span1">SOBRE A AUTORA</span><br/>
                        <span className="posts__div-left__description-span2">Cíntia Lorenzzo</span><br/>
                        <span className="posts__div-left__description-span3">
                            Sou veterinária há 5 anos, apaixonada pelo mundo animal, 
                            principalmente os que estão sempre conosco no dia a dia.
                            Quando não estou no meu consultório ou com meus pets, 
                            estou aqui escrevendo conteúdo para vocês. Espero que você goste!
                        </span><br/>
                        <img className="posts__div-left__description-icon" src={facebook} alt="facebook"/>
                        <img className="posts__div-left__description-icon" src={instagram} alt="instagram"/>
                        <img className="posts__div-left__description-icon" src={twitter} alt="twitter"/>
                    </div>
                    <div className="posts__div-left__popularPublication">               
                        <PopularPublication props={paramsPublication}/>
                        <PopularPublication props={paramsPublication_2}/>
                        <PopularPublication props={paramsPublication_2}/>
                    </div>
                    <ButtonWhite>Ver todas</ButtonWhite>
                </div>
                <div className="posts__div-right">
                    <div className="posts__div-right__title">
                        <span className="posts__div-right__title-span1">Miau!</span><br/>
                        <span className="posts__div-right__title-span2">Seja bem-vinda(o) ao blog PetGatô! Confira nosso conteúdo mais recente:</span>
                    </div>
                    <div className="posts__div-right__posts">
                        {IdList.map((e) => {return (<PreviewPost user_id={sessionStorage.getItem('id')} post_id={e.id}/>)})}
                    </div>
                    <div className="posts__div-right__button">
                        <ButtonWhite>PUBLICAÇÕES ANTERIORES</ButtonWhite>
                    </div>
                </div>
            </div>
            <BottomPage/>
        </div>
    )
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