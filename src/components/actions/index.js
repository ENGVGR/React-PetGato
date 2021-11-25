import like from "../../assets/icons/Icon awesome-heart-1.svg"
import message from "../../assets/icons/Icon awesome-comment-alt.svg"
import view from "../../assets/icons/Icon awesome-eye.svg"
import "./index.scss"

const Like = (likes) => {
    return (
        <div className="actions-main">
            <input type="image" src={like} alt="like"/>
            <span className="main-span">{likes}</span>
        </div>
    )
}

const Message = (messages) => {
    return (
        <div className="actions-main">
            <input type="image" src={message} alt="message"/>
            <span className="main-span">{messages}</span>
        </div>
    )
}

const Views = (views) => {
    return (
        <div className="actions-main">
                <input type="image" src={view} alt="view"/>
                <span className="main-span">{views}</span>
        </div>
    )
}

export { Like, Message, Views }