import { BackPage } from '../../components/backpage'
import { NavBar } from '../../components/navbar'
import views from '../../assets/icons/Icon awesome-eye.svg'
import banner from '../../assets/Esqueci minha senha.jpg'
import './index.scss'
import { ExploreTags } from '../../components/exploretags'
import { PopularPublication } from '../../components/popularpublication'
import { ButtonWhite } from '../../components/button'
import { Like } from '../../components/actions'
import { RespUserComment, UserComment } from '../../components/usercomment'
import { BottomPage } from '../../components/bottompage'
import { useParams } from 'react-router'

export default function SpecificPost({props}) {

    const { post_id } = useParams() 

    return (
        <div className="body-specificPost">
            <NavBar props={paramsNavbar}/>
            <div className="specificPost">
                <div className="specificPostLeft">        
                    <div className="specificPostLeft__backPost">
                        <BackPage/>
                    </div>
                    <div className="specificPostLeft__title">
                        <span className="specificPostLeft__title-text">As almofadinhas são importantes: guia definitivo de cuidados com as patas</span>
                    </div>
                    <div className="specificPostLeft__subTitle">
                        <span className="specificPostLeft__subTitle-text">Publicado em 08 de outubro de 2019 às 09h28</span>
                        <div className="specificPostLeft__subTitle-views">
                            <img className="specificPostLeft__subTitle-views__image" src={views} alt="views"/>
                            <span className="specificPostLeft__subTitle-views__number">88</span>
                        </div>
                    </div>
                    <img className="specificPostLeft__banner" src={banner} alt="banner"/>
                    <div className="specificPostLeft__content">
                        <p className="specificPostLeft__content-text">
                            São 3 da tarde e vocÊ já pefa a coleira para passear com seu companheiro de 
                            caminhada. Tá aquele sol do cão e o asfalto parece que dá para fritar um ovo. 
                            Se dá pra fazer uma fritura, imagina o que isso pode fazer com a patinha do seu pet? 
                            Essa é só uma das situações em que p yamin fica com muita preguiça de continuar o texto.
                        </p>
                        <p className="specificPostLeft__content-text">
                            então o que ele faz? Completa todo o resto com Lorem Ipsum
                        </p>
                        <p className="specificPostLeft__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis laoreet tortor. Nulla 
                            venenatis sed nulla id imperdiet. Pellentesque eu massa pulvinar, laoreet odio ac, tincidunt odio. 
                            Curabitur viverra dui nibh, sit amet congue erat ornare non. Vestibulum posuere tellus vel porta viverra. 
                            Etiam enim velit, ultrices non dolor quis, volutpat iaculis orci. Class aptent taciti sociosqu ad litora torquent 
                            per conubia nostra, per inceptos himenaeos.
                        </p>
                        <p className="specificPostLeft__content-text">
                            "Etiam enim velit, ultrices non dolor quis, volutpat iaculis orci. Class aptent taciti sociosqu ad litora torquent"
                        </p>
                        <p className="specificPostLeft__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis laoreet tortor. Nulla 
                            venenatis sed nulla id imperdiet. Pellentesque eu massa pulvinar, laoreet odio ac, tincidunt odio. 
                            Curabitur viverra dui nibh, sit amet congue erat ornare non. Vestibulum posuere tellus vel porta viverra. 
                            Etiam enim velit, ultrices non dolor quis, volutpat iaculis orci. Class aptent taciti sociosqu ad litora torquent 
                            per conubia nostra, per inceptos himenaeos.
                        </p>
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
                        <PopularPublication props={paramsPublication3}/>
                    </div>
                    <div className="specificPostRight__button">
                        <ButtonWhite>Ver todas</ButtonWhite>
                    </div>
                </div>
            </div>
            <div className="especificPostBottom">
                <div>
                    <Like user_id={sessionStorage.getItem('id')} post_id={post_id}/>
                </div>
                <div className="especificPostBottom__comment">
                    <div className="especificPostBottom__comment-label">
                        <label htmlFor="comment" className="especificPostBottom__comment-label__text">Gostou? Deixe um comentário abaixo:</label>
                    </div>
                    <textarea id="comment" className="especificPostBottom__comment-text" rows="5" cols="86" placeholder="Solta o verbo, meu consagrado..."/>
                    <div className="especificPostBottom__comment-button">
                        <ButtonWhite>Enviar</ButtonWhite>
                    </div>
                </div>
                <div className="especificPostBottom__postComment">
                    <UserComment props={paramsUserComment}/>
                    <div className="especificPostBottom__postComment-resp">
                        <RespUserComment props={paramsUserComment}/>
                        <RespUserComment props={paramsUserComment}/>
                        <ButtonWhite className="especificPostBottom__postComment-resp__button">RESPONDER</ButtonWhite>
                    </div>        
                </div>
                <div className="especificPostBottom__postComment">
                    <UserComment props={paramsUserComment}/>
                    <div className="especificPostBottom__postComment-resp">
                        <RespUserComment props={paramsUserComment}/>
                        <RespUserComment props={paramsUserComment}/>
                        <ButtonWhite className="especificPostBottom__postComment-resp__button">RESPONDER</ButtonWhite>
                    </div>        
                </div>
            </div>
            <div className="bottom">
            <BottomPage/>
            </div>
        </div>
    )
}

const user_id = sessionStorage.getItem('id')

const paramsNavbar = {
    text_1: "Página Inicial",
    link_1: "/",
    text_2: "Sobre Nós",
    link_2: "/",
    text_3: "Fale Conosco",
    link_3: "/",
    text_4: user_id?"Perfil":"Entrar",
    link_4: user_id?"/perfil":"/login",
}

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

const paramsPublication3 = {
    first: false,
    title: "As almofadinhas são importantes: guia definitivo de cuidados com as patas",
    text: "São 3 da tarde e você já pega a coleira para passear com seu companheiro de caminhada. Tá aquele sol do cão e o...",
    date: "Publicado em 08 de outubro de 2019"
}

const paramsUserComment = {
    avatar: banner,
    name: "Pessoa Teste 1",
    date: "09 de outubro de 2021 às 10h35",
    text: "Etiam enim velit, ultrices non dolor quis, volutpat iaculis orci. Class aptent taciti sociosqu ad litora torquent!"
}