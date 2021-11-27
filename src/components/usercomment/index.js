import './index.scss'

const UserComment = ({props}) => {
    return (
        <div className="userComment">
            <img className="userComment__avatar" src={props.avatar} alt="avatar"/>
            <div className="userComment__content">
                <span className="userComment__content-name">{props.name}</span><br/>
                <span className="userComment__content-date">{props.date}</span><br/>
                <span className="userComment__content-comment">{props.text}</span>
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

export { UserComment, RespUserComment }