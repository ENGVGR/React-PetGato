import like from "../../assets/icons/Icon awesome-heart-1.svg"
import message from "../../assets/icons/Icon awesome-comment-alt.svg"
import view from "../../assets/icons/Icon awesome-eye.svg"
import "./index.scss"

const Like = () => {
    return (
        <div className="actions-main">
            <input type="image" src={like} alt="like"/>
            <span className="main-span">36</span>
        </div>
    )
}

const Message = () => {
    return (
        <div className="actions-main">
            <input type="image" src={message} alt="message"/>
            <span className="main-span">4</span>
        </div>
    )
}

const Views = () => {
    return (
        <div className="actions-main">
                <input type="image" src={view} alt="view"/>
                <span className="main-span">88</span>
        </div>
    )
}

export { Like, Message, Views }