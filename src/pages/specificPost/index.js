import { BackPage } from '../../components/backpage'
import { NavBar } from '../../components/navbar'
import views from '../../assets/icons/Icon awesome-eye.svg'
import './index.scss'

export default function SpecificPost({props}) {


    return (
        <div className="specificPost">
            <NavBar props={paramsNavbar}/>
            <div className="specificPost__backPost">
                <BackPage/>
            </div>
            <div className="specificPost__title">
                <span className="specificPost__title-text">As almofadinhas são importantes: guia definitivo de cuidados com as patas</span>
            </div>
            <div className="specificPost__subTitle">
                <span className="specificPost__subTitle-text">Publicado em 08 de outubro de 2019 às 09h28</span>
                <div className="specificPost__subTitle-views">
                    <img className="specificPost__subTitle-views__image" src={views} alt="views"/>
                    <span className="specificPost__subTitle-views__number">88</span>
                </div>
            </div>
            
        </div>

    )
}

const paramsNavbar = {
    text_1: "Página Inicial",
    link_1: "/",
    text_2: "Sobre Nós",
    link_2: "/",
    text_3: "Fale Conosco",
    link_3: "/",
    text_4: "Entrar",
    link_4: "/login"
}