import { NavBar } from "../../components/navbar/index"
import foto from "../../assets/Cíntia Lorenzzo.jpg"
import "./index.scss"
import { Link } from "react-router-dom"
import camera from "../../assets/icons/Icon awesome-camera.svg"
import {InputProfile, LabelProfile} from "../../components/input"
import { ButtonWhite } from "../../components/button"
import { BottomPage } from "../../components/bottompage/index"

function Profile() {
    return(
        <div className="profile">
            <NavBar props={paramsNavbar}/>
            <div className="profile-div">
                <div className="profile-photo-div">
                    <img className="profile-photo" src={foto} alt="foto-de-perfil"/>
                    <Link className="profile-photo-link" to="/"><img className="profile-photo-icon" src={camera} alt="camera"/>Alterar foto de perfil</Link>
                </div>
                <div className="profile-form-div">
                    <div className="profile-title-div">
                        <span className="profile-title">Sua conta</span>
                        <span className="profile-title-2">Edite seu perfil</span>
                    </div>
                    <form className="profile-form">
                        <div className="profile-input-div">
                            <LabelProfile htmlFor="name">Nome</LabelProfile>
                            <InputProfile id="name" required/>
                            <LabelProfile htmlFor="new-password">Nova senha</LabelProfile>
                            <InputProfile id="new-password" type="password"/>
                            <span className="profile-input-span">Deixe em branco caso não queira alterar</span>
                            <LabelProfile htmlFor="password">Senha atual</LabelProfile>
                            <InputProfile id="password" type="password" required/>   
                            <ButtonWhite>Salvar</ButtonWhite>
                        </div>
                        <div className="profile-input-div-2">
                            <LabelProfile htmlFor="email">Email</LabelProfile>
                            <InputProfile id="email" type="email" required/>
                            <LabelProfile htmlFor="new-password-conf">Confirme sua senha</LabelProfile>
                            <InputProfile id="new-password-conf" type="password"/>
                        </div>
                    </form>
                </div>
            </div>
            <BottomPage/>
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
    text_4: "Minha conta",
    link_4: "/perfil",
    emphasis_t4: true
}

export default Profile