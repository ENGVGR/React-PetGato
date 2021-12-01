import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Like, Message, Views } from '../../components/actions'
import { BottomPage } from '../../components/bottompage'
import { ButtonWhite } from '../../components/button'
import Editor from '../../components/editor/index.js'
import { InputCreatePost, Label, LabelCreatePost } from '../../components/input'
import { NavBar } from '../../components/navbar'
import UserContext from '../../components/usecontext'
import './index.scss'

export function CreatePost() {

    const {user} = useContext(UserContext)
    const Admin = sessionStorage.getItem('admin')
    console.log(user, Admin)

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
        <div className="body-createPost">
            <NavBar props={paramsNavbar}/>
            <div className="createPost">
                <div className="createPost__title">
                    <span className="createPost__title-span">BACKOFFICE</span>
                </div>
                <div className="createPost__subTitle">
                    <span className="createPost__subTitle-span">Criar Publicação</span>
                </div>
                <form className="createPost__form">
                    <div className="createPost__form-head">
                        <div className="createPost__form-head__title">
                            <LabelCreatePost>Título da Publicação</LabelCreatePost>
                            <InputCreatePost/>
                        </div>
                        <div className="createPost__form-head__actions">
                            <Like/>
                        </div>
                        <div className="createPost__form-head__actions">
                            <Message/>
                        </div>
                        <div className="createPost__form-head__actions">
                            <Views/>
                        </div>
                    </div>
                    <div className="createPost__form-content">
                        <Editor/>
                    </div>
                    <div className="createPost__form-imageTitle">
                        <LabelCreatePost>Escolha uma imagem de capa:</LabelCreatePost>
                    </div>  
                    <div className="createPost__form-image">
                        <label htmlFor="file" className="createPost__form-image__label"><span className="createPost__form-image__label-span">Escolher arquivo</span>  Nenhum arquivo escolhido</label>
                        <input id="file" type="file" accept="image/*" className="createPost__form-image__input"/>
                    </div>
                    <div className="createPost__form-tagsTitle">
                        <LabelCreatePost>Escolha pelo menos uma tag:</LabelCreatePost>
                    </div>
                    <div className="createPost__form-tags">                        
                        {Tags.map((e) => {return (<div className="createPost__form-tags__tag"><input id={e.id} type="checkbox"/><label htmlFor={e.id} className="createPost__form-tags__tag-label">{e.name}</label></div>)})}
                    </div>
                    <div className="createPost__form-tagsButton">
                        <ButtonWhite className="createPost__form-tagsButton__button" >GERENCIAR TAGS</ButtonWhite>
                    </div>
                    <div className="createPost__form-bottom">
                        <ButtonWhite className="createPost__form-bottom__button">PUBLICAR</ButtonWhite>
                        <Link to="/"><ButtonWhite>VOLTAR</ButtonWhite></Link>
                    </div>
                </form>
            </div>
            <BottomPage/>
        </div>
    )
}

const Tags = [
    {name: "Adestramento", id: "tag-1"},
    {name: "Adoção", id: "tag-2"},
    {name: "Aves", id: "tag-3"},
    {name: "Brinquedos", id: "tag-4"},
    {name: "Crônicas", id: "tag-5"},
    {name: "Cuidados", id: "tag-6"},
    {name: "Curiosidades", id: "tag-7"},
    {name: "Cães & Gatos", id: "tag-8"},
    {name: "Engraçado", id: "tag-9"},
    {name: "Estética", id: "tag-10"},
    {name: "Exóticos", id: "tag-11"},
    {name: "Filhotes", id: "tag-12"},
    {name: "Guias", id: "tag-13"},
    {name: "Nutrição", id: "tag-14"},
    {name: "Peixes", id: "tag-15"}
]