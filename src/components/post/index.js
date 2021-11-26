import { Like, Message, Views } from "../actions"
import { ButtonWhite } from "../button"
import "./index.scss"

const Post = ({props}) => {

    return (
        <div className="post-body">
            <img className="body-img" src={props.photo} alt="foto"/>
            <div className="main">
                <div className="main-tags">
                    <span className="main-tags__span-1">Tags:</span>
                    {props.tags?props.tags.map(PostTags):<></>}
                </div>
                <div className="main-title">
                    <span className="main-title__span">{props.title}</span>
                </div>
                <div className="main-text">
                    <span className="main-text__span">{props.message}</span>
                </div>
                <div className="main-buttons">
                    <div>
                        <ButtonWhite className="main-buttons__white">Leia mais</ButtonWhite>
                    </div>
                    <div className="main-buttons__actions">
                        <Like likes={props.likes}/>
                    </div>
                    <div className="main-buttons__actions">
                        <Message messages={props.messages}/>
                    </div>
                    <div className="main-buttons__actions">
                        <Views views={props.views}/>
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

export { Post }