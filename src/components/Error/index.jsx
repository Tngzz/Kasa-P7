import './style.css';
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/404.png'
import Header from '../Header/index';

function Error () {
    return (
        <div className='error'>
            <Header />
            <div className='errorStuff'>
                <img className='errorImg' src = {ErrorImg} alt = 'Code erreur 404'></img>
                <h1 className='errorText'>Oops! La page que vous demandez n'existe pas.</h1>
                <Link to={"/home"} className="linkBackHome">Retourner sur la page d'Accueil</Link>
                
            </div> 
        </div>
    )
}

export default Error;