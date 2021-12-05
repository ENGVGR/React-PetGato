import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../api/api"
import { Like, Message, Views } from "../actions"
import { ButtonWhite } from "../button"
import "./index.scss"

const PreviewPost = ({user_id, post_id}) => {

    const [Title, setTitle] = useState('')
    const [Content, setContent] = useState('')
    const [Banner, setBanner] = useState()

    useEffect(() => {
        
        async function GetViews() {
            api.get(`/posts/${post_id}`)
            .then((resp) => {
                setTitle(resp.data.title)
                setContent(resp.data.content)  
                setBanner(resp.data.banner_image)
            })
        } GetViews()        
    },[post_id])

    return (
        <div className="post-body">
            <img className="body-img" src={Banner} alt="foto"/>
            <div className="main">
                <div className="main-tags">
                    <span className="main-tags__span-1">Tags:</span>
                    {tags?tags.map(PostTags):<></>}
                </div>
                
                <div className="main-title">
                    <Link className="link" to={{pathname: `/post/${post_id}`}}>
                        <span className="main-title__span">{Title}</span>
                    </Link>
                </div>
                <div className="main-text">
                    <span className="main-text__span">{Content.substr(0, 400)}</span>
                </div>
                <div className="main-buttons">
                    <>
                        <Link className="link" to={{pathname: `/post/${post_id}`}}>
                            <ButtonWhite className="main-buttons__white">Leia mais</ButtonWhite>
                        </Link>
                    </>
                    <div className="main-buttons__actions">
                        <Like user_id={user_id} post_id={post_id}/>
                    </div>
                    <div className="main-buttons__actions">
                        <Message />
                    </div>
                    <div className="main-buttons__actions">
                        <Views post_id={post_id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PostTags(tag) {
    return (
        <span className="main-tags__span-2">{tag}</span>
    )
} 

const tags = ["cuidados", "Cães & Gatos", "Guias"]

export { PreviewPost }