import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/Logo.png';


function header () {
    return (
        <div className='header'>
            <header>
                <div> 
                    <img className='imgHeader' src={Logo} alt="Kasa, location d'appartement"></img>
                </div>
                <nav className='navBar'>
                    <ul>
                        <li><Link to={"/home"}>Accueil</Link></li>
                        <li><Link to={"/about"}>A propos</Link></li>
                    </ul>
                </nav>
            </header>
            
        </div>
    );
};

export default header;