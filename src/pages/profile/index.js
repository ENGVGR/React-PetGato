import { NavBar } from "../../components/navbar/index"
import foto from "../../assets/Cíntia Lorenzzo.jpg"
import "./index.scss"
import { Link } from "react-router-dom"
import camera from "../../assets/icons/Icon awesome-camera.svg"
import {InputProfile, LabelProfile} from "../../components/input"
import { ButtonWhite } from "../../components/button"
import { BottomPage } from "../../components/bottompage/index"
import { useContext, useState } from "react"
import api from '../../api/api';
import avatarNeutro from '../../assets/avatar_neutro.png'
import UserContext from "../../components/useContext/userContext"

export default function Profile() {

    const [First, setFirst] = useState(true)
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [NewPassword, setNewPassword] = useState("")
    const [NewPasswordConfirm, setNewPasswordConfirm] = useState("")
    const [Avatar, setAvatar] = useState({})
    const [SendAvatar, setSendAvatar] = useState({})
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

    if (First) {
        setFirst(false)
        async function Get() {
            api.get(`users/${user}`, headers)
            .then((resp) => {
                console.log(resp)
                const Data = resp.data
                if (Data) {
                    setName(Data.name)
                    setEmail(Data.email)      
                    setAvatar(Data.avatar)
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

        console.log("avatar", foto)

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
                        Data_2.append('avatar', SendAvatar, SendAvatar.name)

                        api.patch(`users/${user}`, Data_2, headers)
                        .then(() => {
                            setConfirmation(true)
                            setErrorLogin(false)
                            setErrorNewPassword(false)
                            setFirst(true)
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
                        Data_2.append('avatar', SendAvatar, SendAvatar.name)

                        api.patch(`users/${user}`, Data_2, headers)
                        .then(() => {
                            setConfirmation(true)
                            setErrorLogin(false)
                            setErrorNewPassword(false)
                            setFirst(true)
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
                    {Avatar?<img className="profile-photo" src={Avatar} alt="foto-de-perfil"/>:<img className="profile-photo" src={avatarNeutro} alt="foto-de-perfil"/>}
                    <label htmlFor="file" className="profile-photo-link "><img src={camera} alt="camera" className="profile-photo-icon"/>Alterar foto de perfil</label>
                    <input id="file" style={{visibility:"hidden"}} type="file" accept="image/*" onChange={(event) => {setSendAvatar(event.target.files[0])}}/>
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

const headers = {
    headers: {Authorization: sessionStorage.getItem('token')}
}