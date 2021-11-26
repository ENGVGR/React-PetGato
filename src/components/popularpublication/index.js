import "./index.scss"

const PopularPublication = ({props}) => {
    return (
        <div className="popularpublication-head">
            <div className="main-line"/>
            {props.first?<div className="main-title"><span className="main-title__span">Publicações mais populares:</span></div>:<></>}
            <div className="main-title-2">
                <span className="title">{props.title}</span>
            </div>
            <div className="main-text">
                <span className="text">{props.text}</span>  
            </div> 
            <div className="main-date">
                <span className="date">{props.date}</span>
            </div>
        </div>
    )
} 

export { PopularPublication }