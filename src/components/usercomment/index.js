import { useEffect, useState } from 'react'
import api from '../../api/api'
import './index.scss'

const UserComment = ({Comment, date, User_id}) => {

    const [Name, setName] = useState('')
    const [Avatar, setAvatar] = useState('')

    useEffect(() => {
        
        async function GetAvatar() {
            console.log(User_id, "id")
            api.get(`/users/avatar/${User_id}`)
            .then((resp) => {
                setName(resp.data.name)
                setAvatar(resp.data.avatar)               
            })
        } GetAvatar()

    },[User_id])

    return (
        <div className="userComment">
            <img className="userComment__avatar" src={Avatar} alt="avatar"/>
            <div className="userComment__content">
                <span className="userComment__content-name">{Name}</span><br/>
                <span className="userComment__content-date">{(new Date(date)).toLocaleDateString('pt-BR', DATE_OPTIONS)}</span><br/>
                <span className="userComment__content-comment">{Comment}</span>
            </div>
        </div>
    )
}

const RespUserComment = ({props}) => {
    return (
        <div className="respUserComment">
            <img className="respUserComment__avatar" src={props.avatar} alt="avatar"/>
            <div className="respUserComment__content">
                <span className="respUserComment__content-name"> {props.name}</span><br/>
                <span className="respUserComment__content-date">{props.date}</span><br/>
                <span className="respUserComment__content-comment">{props.text}</span>
            </div>
        </div>
    )
}

const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }

export { UserComment, RespUserComment }