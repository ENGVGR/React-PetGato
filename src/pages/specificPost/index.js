import { NavBar } from '../../components/navbar'
import './index.scss'

export default function SpecificPost() {


    return (
        <div className="specificPost">
            <NavBar props={paramsNavbar}/>
            
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