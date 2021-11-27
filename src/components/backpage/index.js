import { Link } from 'react-router-dom'
import arrow from '../../assets/icons/Icon awesome-chevron-left.svg'
import './index.scss'

const BackPage = () => {
    return (
        <div className="backPage">
            <Link to="/" className="backPage__link">
                <img className="backPage__link-image" src={arrow} alt="arrow"/>
                <span className="backPage__link-text">VOLTAR</span>
            </Link>
        </div>
    )
}

export { BackPage }