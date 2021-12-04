//SCSS
import "./index.scss"
//React
import { useContext, useEffect, useState } from "react"
//Components
import { NavBar } from "../../components/navbar/index"
import {InputProfile, LabelProfile} from "../../components/input"
import { ButtonWhite } from "../../components/button"
import { BottomPage } from "../../components/bottompage/index"
import UserContext from "../../components/useContext/userContext"
//Assets
import foto from "../../assets/Cíntia Lorenzzo.jpg"
import camera from "../../assets/icons/Icon awesome-camera.svg"
import avatarNeutro from '../../assets/avatar_neutro.png'
//Api
import api from '../../api/api';

export default function Profile() {

    const [First, setFirst] = useState(true)
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [NewPassword, setNewPassword] = useState("")
    const [NewPasswordConfirm, setNewPasswordConfirm] = useState("")
    const [Avatar, setAvatar] = useState()
    const [SendAvatar, setSendAvatar] = useState()
    const [ErrorLogin, setErrorLogin] = useState(false)
    const [ErrorNewPassword, setErrorNewPassword] = useState(false)
    const [Confirmation, setConfirmation] = useState(false)
    const {user} = useContext(UserContext)
    const Admin = sessionStorage.getItem('admin')

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
        emphasis_t4: true
    }

    

    useEffect(() => {
        async function Get() {
            api.get(`users/${user}`, headers)
            .then((resp) => {
                const Data = resp.data
                if (Data) {
                    setName(Data.name)
                    setEmail(Data.email)      
                    setAvatar(Data.avatar)
                }        
            }) 
        } Get()
    })

    function handleSubmit(event) {
        event.preventDefault()

        NewPassword===NewPasswordConfirm?setErrorNewPassword(false):setErrorNewPassword(true)

        async function Update() {  

            if (NewPassword===NewPasswordConfirm) {
                if (NewPassword!=="") {
                    const Data = {
                        email: Email,
                        password: Password
                    }
                    
                    api.post('users/login/', Data)
                    .then(() => {

                        const Data_2 = new FormData()
                        Data_2.append('name', Name)
                        Data_2.append("email", Email)
                        Data_2.append("password", NewPassword)
                        Data_2.append('password_confirmation', NewPasswordConfirm)
                        if (SendAvatar) {
                            Data_2.append('avatar', SendAvatar, SendAvatar.name)
                        }

                        api.patch(`users/${user}`, Data_2, headers)
                        .then(() => {
                            setConfirmation(true)
                            setErrorLogin(false)
                            setErrorNewPassword(false)
                            if (SendAvatar) {
                                setAvatar(URL.createObjectURL(SendAvatar)) 
                            }   
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
                        
                        const Data_2 = new FormData()
                        Data_2.append('name', Name)
                        Data_2.append("email", Email)
                        Data_2.append("password", Password)
                        if (SendAvatar) {
                            Data_2.append('avatar', SendAvatar, SendAvatar.name)
                        }
                        
                        api.patch(`users/${user}`, Data_2, headers)
                        .then(() => {                          
                            setConfirmation(true)
                            setErrorLogin(false)
                            setErrorNewPassword(false)         
                            if (SendAvatar) {
                                setAvatar(URL.createObjectURL(SendAvatar)) 
                            }          
                        })         
                    })
                    .catch(() => {
                        setErrorLogin(true)
                    })             
                }
            }
        }Update()
    }

    return(
        <div className="profile">
            <NavBar props={paramsNavbar}/>
            <div className="profile__div">
                <div className="profile__div-photo">
                    {Avatar?<img className="profile__div-photo__img" src={Avatar} alt="foto-de-perfil"/>:<img className="profile__div-photo__img" src={avatarNeutro} alt="foto-de-perfil"/>}
                    <label htmlFor="file" className="profile__div-photo__link"><img src={camera} alt="camera" className="profile__div-photo__icon"/>{SendAvatar?SendAvatar.name:"Alterar foto de perfil"}</label>
                    <input id="file" style={{visibility:"hidden"}} type="file" accept="image/*" onChange={(event) => {setSendAvatar(event.target.files[0])}}/>
                </div>
                <div className="profile__div-form">
                    <div className="profile__div-form__title">
                        <span className="profile__div-form__title-span1">Sua conta</span>
                        <span className="profile__div-form__title-span2">Edite seu perfil</span>
                    </div>
                    <form onSubmit={handleSubmit} className="profile__div-form__form">
                        <div className="profile__div-form__form-input">
                            <LabelProfile htmlFor="name">Nome</LabelProfile>
                            <InputProfile id="name" value={Name} onChange={(event) => {setName(event.target.value)}} required/>

                            <LabelProfile htmlFor="new-password">Nova senha</LabelProfile>
                            <InputProfile id="new-password" type="password" value={NewPassword} onChange={(event) => {setNewPassword(event.target.value)}} minLength="8"/>

                            <span className="profile__div-form__form-input__span">Deixe em branco caso não queira alterar</span>
                            <LabelProfile htmlFor="password">Senha atual</LabelProfile>
                            <InputProfile id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>   
                            {ErrorLogin?<span className="profile__div-form__form-input__error"> *Senha incorreta!</span>:<></>}

                            {Confirmation?<span className="profile__div-form__form-input__error"> *Mudanças feitas!</span>:<></>}
                            <ButtonWhite>Salvar</ButtonWhite>
                        </div>
                        <div className="profile__div-form__form2">
                            <LabelProfile htmlFor="email">Email</LabelProfile>
                            <InputProfile id="email" type="email" className="profile__div-form__form2-email" value={Email} disabled/>

                            <LabelProfile htmlFor="new-password-conf">Confirme sua senha</LabelProfile>
                            <InputProfile id="new-password-conf" type="password" value={NewPasswordConfirm} onChange={(event) => {setNewPasswordConfirm(event.target.value)}} minLength="8"/>
                            {ErrorNewPassword?<span className="profile__div-form__form2-error"> *Precisa ser a mesma senha!</span>:<></>}
                        </div>
                    </form>
                </div>
            </div>
            <BottomPage/>
        </div>        
    )
}

const headers = {
    headers: {Authorization: sessionStorage.getItem('token')}
}