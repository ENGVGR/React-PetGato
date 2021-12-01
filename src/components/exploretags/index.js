import "./index.scss"

const ExploreTags = ({props}) => {
    return (
        <div className="exploreTags">
            {props.first?<></>:<div className="exploreTags__line"/>}
            {props.first?<div className="exploreTags__title"><span className="exploreTags__title-text">Explore essas tags:</span></div>:<></>}
            <div className="exploreTags__tag">
                <span className="exploreTags__tag-text">{props.tag}</span>
            </div>
            <div className="exploreTags__content">
                <span className="exploreTags__content-text">{props.text}</span>  
            </div> 
        </div>
    )
} 

export { ExploreTags }