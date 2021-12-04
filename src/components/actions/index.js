import like from "../../assets/icons/Icon awesome-heart-1.svg"
import like_red from "../../assets/icons/Icon awesome-heart.svg"
import comment from "../../assets/icons/Icon awesome-comment-alt.svg"
import view from "../../assets/icons/Icon awesome-eye.svg"
import "./index.scss"
import { useEffect, useState } from "react"
import api from "../../api/api"

const Like = ({user_id, post_id}) => {

    const [Click,setClick] = useState(false)
    const [Likes,setLikes] = useState(0)

    function PostLike(user_id,post_id) {
        
        if (user_id ) {
            api.post(`/post/${user_id}/${post_id}`)
            .then((resp) => {
                if (resp.data === "Criado") {
                    setClick(true)                
                }
                else {
                    setClick(false)
                }
            })
        }
    }

    useEffect(() => {

        async function GetLikes() {

            api.get(`/post/${post_id}`)
            .then((resp) => {     
                setLikes(resp.data)
            })
        } GetLikes()

        async function GetLike() {
            api.get(`/post/${user_id}/${post_id}`)
            .then ((resp) => {
                if (resp.data === "Deu like!") {
                    setClick(true)
                }
                else {
                    setClick(false)
                }
            })
        } GetLike()
    })

    return (
        <div className="actions-main">
            <input type="image" src={Click?like_red:like} alt="like" onClick={() => {PostLike(user_id,post_id)}}/>
            <span className="main-span">{Likes}</span>
        </div>
    )
}

const Message = ({messages}) => {
    return (
        <div className="actions-main">
            <input type="image" src={comment} alt="message"/>
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