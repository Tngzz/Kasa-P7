import React from 'react';
import './style.css';
import Logo from '../../assets/LogoBlanc.png';


function footer () {
    return (
        <div className='footer'>
            <footer>
                <img src={Logo} alt="Kasa, location d'appartement"></img>
                <div className='Right'>
                    <h1>© 2020 Kasa. All rights reserved</h1>
                </div>
            </footer>
        </div>
    );
};

export default footer;