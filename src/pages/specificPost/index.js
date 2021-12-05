//SCSS
import './index.scss'
//React
import { useParams } from 'react-router'
import { useContext, useEffect, useState } from 'react'
//Components
import { BackPage } from '../../components/backpage'
import { NavBar } from '../../components/navbar'
import { ExploreTags } from '../../components/exploretags'
import { PopularPublication } from '../../components/popularpublication'
import { ButtonWhite } from '../../components/button'
import { Like } from '../../components/actions'
import { UserComment } from '../../components/usercomment'
import { BottomPage } from '../../components/bottompage'
import UserContext from '../../components/useContext/userContext.js'
//Assets
import views from '../../assets/icons/Icon awesome-eye.svg'
//Api
import api from '../../api/api'

export default function SpecificPost() {

    const { post_id } = useParams() 
    const [Views, setViews] = useState(0)
    const [Title, setTitle] = useState('')
    const [Content, setContent] = useState('')
    const [First] = useState(true)
    const {user} = useContext(UserContext)
    const Admin = sessionStorage.getItem('admin')
    const [Banner, setBanner] = useState()
    const [Comment, setComment] = useState('')
    const [date, setdate] = useState('')
    const headers = {headers: {Authorization: sessionStorage.getItem('token')}}
    const [CommentList, setCommentList] = useState('')

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

    useEffect(() => {
        
        async function GetViews() {
            api.get(`/posts/${post_id}`)
            .then((resp) => {
                setViews(resp.data.views)
                setTitle(resp.data.title)
                setContent(resp.data.content)  
                setBanner(resp.data.banner_image)
                setdate(resp.data.date)
                if (First ) {
                    const Data = {views: Views + 1}
                    api.patch(`/posts/${post_id}`, Data)                   
                }
            })
        } GetViews()        
    },[First, Views, post_id])

    useEffect(() => {
        
        async function GetComments() {
            api.get(`/comments/${post_id}`)
            .then((resp) => {
                const List = resp.data
                if (resp) {
                    setCommentList(List)
                }
            })
        } if (post_id) {GetComments()}

    },[post_id, Comment])

    function handleSubmit(e) {
        e.preventDefault()

        if (user) {
        const Data = {
            description: Comment
        }

        api.post(`/comments/${user}/${post_id}`, Data, headers)
        .then(() => {
            setComment('')
        })       
    }
    }

    return (
        <div className="body-specificPost">
            <NavBar props={paramsNavbar}/>
            <div className="specificPost">
                <div className="specificPostLeft">        
                    <div className="specificPostLeft__backPost">
                        <BackPage/>
                    </div>
                    <div className="specificPostLeft__title">
                        <span className="specificPostLeft__title-text">{Title}</span>
                    </div>
                    <div className="specificPostLeft__subTitle">
                        <span className="specificPostLeft__subTitle-text">{(new Date(date)).toLocaleDateString('pt-BR', DATE_OPTIONS)}</span>
                        <div className="specificPostLeft__subTitle-views">
                            <img className="specificPostLeft__subTitle-views__image" src={views} alt="views"/>
                            <span className="specificPostLeft__subTitle-views__number">{Views + 1}</span>
                        </div>
                    </div>
                    <img className="specificPostLeft__banner" src={Banner} alt="banner"/>
                    <div className="specificPostLeft__content">
                        <textarea className="specificPostLeft__content-text" value={Content} disabled/>
                    </div>
                    <div className="specificPostLeft__line"/>
                </div>
                <div className="specificPostRight">
                    <input className="specificPostRight__search"/>
                    <div>
                        <ExploreTags props={paramsExploreTags}/>
                        <ExploreTags props={paramsExploreTags2}/>
                        <ExploreTags props={paramsExploreTags3}/>
                    </div>
                    <div>
                        <PopularPublication props={paramsPublication}/>
                        <PopularPublication props={paramsPublication2}/>
                        <PopularPublication props={paramsPublication2}/>
                    </div>
                    <div className="specificPostRight__button">
                        <ButtonWhite>Ver todas</ButtonWhite>
                    </div>
                </div>
            </div>
            <div className="especificPostBottom">
                <div>
                    <Like user_id={sessionStorage.getItem('id')} post_id={post_id} message="Curtiram essa publicação"/>
                </div>
                <div className="especificPostBottom__comment">
                    <div className="especificPostBottom__comment-label">
                        <label htmlFor="comment" className="especificPostBottom__comment-label__text">Gostou? Deixe um comentário abaixo:</label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {user?<textarea id="comment" className="especificPostBottom__comment-text" rows="5"  placeholder="Solta o verbo, meu consagrado..." value={Comment} onChange={(e) => {setComment(e.target.value)}}/>:<textarea id="comment" className="especificPostBottom__comment-text" rows="5"  placeholder="Apenas usuários cadastrados podem comentar!" value={Comment} onChange={(e) => {setComment(e.target.value)}} disabled/>}                       
                        <div className="especificPostBottom__comment-button">
                            <ButtonWhite>Enviar</ButtonWhite>
                        </div>
                    </form>
                </div>
                <div className="especificPostBottom__postComment">
                    {CommentList!==''?CommentList.map((e) => {return(<UserComment Comment={e.description} date={e.created_at} User_id={e.user_id}/>)}):<></>}      
                </div>
            </div>
            <div className="bottom">
            <BottomPage/>
            </div>
        </div>
    )
}

const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }

const paramsExploreTags = {
    first: true,
    tag: "Cuidados",
    text: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o..."
}

const paramsExploreTags2 = {
    first: false,
    tag: "Cães & Gatos",
    text: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o..."
}

const paramsExploreTags3 = {
    first: false,
    tag: "Guias",
    text: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o..."
}

const paramsPublication = {
    first: true,
    title: "As almofadinhas são importantes: guia definitivo de cuidados com as patas",
    text: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o...",
    date: "Publicado em 08 de outubro de 2019"
}

const paramsPublication2 = {
    first: false,
    title: "As almofadinhas são importantes: guia definitivo de cuidados com as patas",
    text: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o...",
    date: "Publicado em 08 de outubro de 2019"
}