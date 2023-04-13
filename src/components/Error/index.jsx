import './style.css';
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/404.png'
import Header from '../Header/index';

function Error () {
    return (
        <div className='error'>
            <Header />
            <div className='errorStuff'>
                <h1 className='numberText'>404</h1>
                <h2 className='errorText'>Oops! La page que vous demandez n'existe pas.</h2>
                <Link to={"/home"} className="linkBackHome">Retourner sur la page d'Accueil</Link>
                
            </div> 
        </div>
    )
}

export default Error;