import { useState } from 'react';
import './style.css';
import Arrow from '../../assets/arrow.png';

export default function collapse ({title, texte}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false)

function handleClick () {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
}
    return (   
        <>
            <div className='slideBar' onClick={handleClick}>
                <h1 className='slideH1' >{title}</h1>
                <img
                    className={`arrowDown ${isRotated ? 'rotate' : ''}`}
                    src={Arrow}
                    alt='Arrow'
                ></img>
            </div>
            <div className='textSlide'>
                {isOpen && 
                    
                    <div className='textBottomeSlide'>{texte}</div>
                    
                }
            </div>
        </>  
    )
   
}


