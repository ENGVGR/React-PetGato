import like from "../../assets/icons/Icon awesome-heart-1.svg"
import like_red from "../../assets/icons/Icon awesome-heart.svg"
import message from "../../assets/icons/Icon awesome-comment-alt.svg"
import view from "../../assets/icons/Icon awesome-eye.svg"
import "./index.scss"
import { useState } from "react"

const Like = ({likes}) => {

    const [Click,setClick] = useState(false)

    return (
        <div className="actions-main">
            <input type="image" src={Click?like_red:like} alt="like" onClick={Click?() => {setClick(false)}:() => {setClick(true)}}/>
            <span className="main-span">{likes}</span>
        </div>
    )
}

const Message = ({messages}) => {
    return (
        <div className="actions-main">
            <input type="image" src={message} alt="message"/>
            <span className="main-span">{messages}</span>
        </div>
    )
}

const Views = ({views}) => {
    return (
        <div className="actions-main">
                <input type="image" src={view} alt="view"/>
                <span className="main-span">{views}</span>
        </div>
    )
}

export { Like, Message, Views }