import { Link } from 'react-router-dom';
import './style.css';

function card ({id, title, cover}) {
    return (
        <Link to = {`/Hebergements/${id}`} className='homeCard'>
            <img className='imgCard' src = {cover} alt ={title}></img>
            <h2 className='homeCardH2'>{title}</h2>
        </Link>
        
    )
}

export default card;