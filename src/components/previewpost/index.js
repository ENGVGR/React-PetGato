import { Link } from "react-router-dom"
import { Like, Message, Views } from "../actions"
import { ButtonWhite } from "../button"
import "./index.scss"

const PreviewPost = ({props, user_id, post_id}) => {

    return (
        <div className="post-body">
            <img className="body-img" src={props.photo} alt="foto"/>
            <div className="main">
                <div className="main-tags">
                    <span className="main-tags__span-1">Tags:</span>
                    {props.tags?props.tags.map(PostTags):<></>}
                </div>
                
                <div className="main-title">
                    <Link className="link" to={{pathname: `/post/${post_id}`}}>
                        <span className="main-title__span">{props.title}</span>
                    </Link>
                </div>
                <div className="main-text">
                    <span className="main-text__span">{props.message}</span>
                </div>
                <div className="main-buttons">
                    <div>
                        <ButtonWhite className="main-buttons__white">Leia mais</ButtonWhite>
                    </div>
                    <div className="main-buttons__actions">
                        <Like user_id={user_id} post_id={post_id}/>
                    </div>
                    <div className="main-buttons__actions">
                        <Message messages={props.messages}/>
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

export { PreviewPost }