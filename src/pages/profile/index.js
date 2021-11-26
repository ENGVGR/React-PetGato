import { NavBar } from "../../components/navbar/index"
import foto from "../../assets/Cíntia Lorenzzo.jpg"
import "./index.scss"
import { Link } from "react-router-dom"
import camera from "../../assets/icons/Icon awesome-camera.svg"
import {InputProfile, LabelProfile} from "../../components/input"
import { ButtonWhite } from "../../components/button"
import { BottomPage } from "../../components/bottompage/index"
import { useState } from "react"
import api from '../../api/api';

export default function Profile() {

    const [First, setFirst] = useState(true)
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [NewPassword, setNewPassword] = useState("")
    const [NewPasswordConfirm, setNewPasswordConfirm] = useState("")
    const [ErrorLogin, setErrorLogin] = useState(false)
    const [ErrorNewPassword, setErrorNewPassword] = useState(false)
    const [Confirmation, setConfirmation] = useState(false)

    if (First) {
        setFirst(false)
        async function Get() {
            api.get(`users/${id}`, headers)
            .then((resp) => {
                const Data = resp.data
                if (Data) {
                    setName(Data.name)
                    setEmail(Data.email)      
                }        
            })
            .catch((err) => {
                console.log(err)
            })      
        }
        Get()
    }

    function handleSubmit(event) {
        event.preventDefault()

        NewPassword===NewPasswordConfirm?setErrorNewPassword(false):setErrorNewPassword(true)
        console.log(NewPassword)

        async function Update() {  

            if (NewPassword===NewPasswordConfirm) {
                if (NewPassword!=="") {
                    const Data = {
                        email: Email,
                        password: Password
                    }

                    api.post('users/login/', Data)
                    .then(() => {
                        const Data_2 = {
                            name: Name,
                            email: Email,
                            password: NewPassword,
                            password_confirmation: NewPasswordConfirm
                        }
                        api.patch(`users/${id}`, Data_2, headers)
                        .then(() => {
                            setConfirmation(true)
                            setErrorLogin(false)
                            setErrorNewPassword(false)
                        })                   
                    })
                    .catch(() => {
                        setErrorLogin(true)
                    })   
        
                }
                else {
                    const Data = {
                        email: Email,
                        password: Password
                    }

                    api.post('users/login/', Data)
                    .then(() => {
                        const Data_2 = {
                            name: Name,
                            email: Email,
                            password: Password
                        }
                        api.patch(`users/${id}`, Data_2, headers)
                        .then(() => {
                            setConfirmation(true)
                            setErrorLogin(false)
                            setErrorNewPassword(false)
                        })         
                    })
                    .catch(() => {
                        setErrorLogin(true)
                    })             
                }
            }
        }
        Update()
    }

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
                    <form onSubmit={handleSubmit} className="profile-form">
                        <div className="profile-input-div">
                            <LabelProfile htmlFor="name">Nome</LabelProfile>
                            <InputProfile id="name" value={Name} onChange={(event) => {setName(event.target.value)}} required/>

                            <LabelProfile htmlFor="new-password">Nova senha</LabelProfile>
                            <InputProfile id="new-password" type="password" value={NewPassword} onChange={(event) => {setNewPassword(event.target.value)}} minLength="8"/>

                            <span className="profile-input-span">Deixe em branco caso não queira alterar</span>
                            <LabelProfile htmlFor="password">Senha atual</LabelProfile>
                            <InputProfile id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>   
                            {ErrorLogin?<span className="register-span-error"> *Senha incorreta!</span>:<></>}

                            {Confirmation?<span className="register-span-error"> *Mudanças feitas!</span>:<></>}
                            <ButtonWhite>Salvar</ButtonWhite>
                        </div>
                        <div className="profile-input-div-2">
                            <LabelProfile htmlFor="email">Email</LabelProfile>
                            <InputProfile id="email" type="email" className="email" value={Email} disabled/>

                            <LabelProfile htmlFor="new-password-conf">Confirme sua senha</LabelProfile>
                            <InputProfile id="new-password-conf" type="password" value={NewPasswordConfirm} onChange={(event) => {setNewPasswordConfirm(event.target.value)}} minLength="8"/>
                            {ErrorNewPassword?<span className="register-span-error"> *Precisa ser a mesma senha!</span>:<></>}
                        </div>
                    </form>
                </div>
            </div>
            <BottomPage/>
        </div>        
    )
}

const id = sessionStorage.getItem('id')

const headers = {
    headers: {Authorization: sessionStorage.getItem('token')}
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