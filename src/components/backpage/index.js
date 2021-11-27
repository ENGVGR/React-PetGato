import arrow from '../../assets/icons/Icon awesome-chevron-left.svg'
import './index.scss'

const BackPage = () => {
    return (
        <div className="backPage">
            <img className="backPage__image" src={arrow} alt="arrow"/>
            <span className="backPage__text">VOLTAR</span>
        </div>
    )
}

export { BackPage }