import '../reset-password/index.scss'
import Foto_Esqueci_Minha_Senha from '../../assets/Esqueci minha senha.jpg'
import { Logo } from '../../components/logo/index.js'
import '../../components/button/index.scss'
import '../../components/input/index.scss'
import { Link } from 'react-router-dom'

const Reset_Password_Page = () => {
    return(

        <div className="reset-password-div">
            <img className="reset-password-image" src={Foto_Esqueci_Minha_Senha} alt="foto"/>
            <div className="reset-password-div-form">
                <Logo/>
                <form>
                    <label className="label-form" htmlFor="name">Email</label>
                    <input className="input-form" type="email" required/>
                    <span className="reset-password-span-message">Insira seu email para recuperar a senha</span>
                    <button className="button-purple">RECUPERAR SENHA</button>
                </form>
                <div className="reset-password-div-bottom">
                    <span className="reset-password-span-ask">Lembrou a senha?</span> 
                    <Link className="reset-password-link" to="/">Faça login</Link>
                </div>
                <div className="reset-password-div-bottom-2">
                    <span className="reset-password-span-ask">Ainda não tem conta?</span> 
                    <Link className="reset-password-link" to="/">Cadastre-se aqui</Link>
                </div>
            </div>
        </div>



        /*
        <div className="page-container">
            <div className="image-container">
                <img className="image" src={Foto_Esqueci_Minha_Senha} alt="foto"/>
            </div>
            <div className="content-container">
                <div className="content">
                    <Logo/>
                    <div className="form-container">
                        <label for="email">Email</label>
                        <input id="email"></email>
                        <span>Insira seu email para recuperar a senha</span>
                    </div>
                    <button className="button-purple">RECUPERAR SENHA</button>
                    <div className="links-text">
                        <span>Lembrou a senha? <a href="/">Faça Login</a></span>
                        <span>Ainda não tem conta? <a href="/">Cadastre-se aqui</a></span>
                    </div>
                </div>
            </div>
        </div>*/
    )
}

export default Reset_Password_Page