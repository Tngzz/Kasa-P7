import './style.css'
import React from 'react';
import Data from '../../data/data.json';
import ArrowPrevious from '../../assets/ArrowLeft.png';
import ArrowNext from '../../assets/ArrowRight.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export function AppartementPage() {
    const { id } = useParams();
    const dataHebergement = Data.find((item) => item.id === id);
    return { dataHebergement };
}


export default function Carrousel(props) {
    const { dataHebergement } = props;

    const [activeIndex, setActiveIndex] = useState(0)

    const previousImage = () => {
        setActiveIndex((activeIndex - 1 + dataHebergement.pictures.length) % dataHebergement.pictures.length)
    }

    const nextImage = () => {
        setActiveIndex((activeIndex + 1 ) % dataHebergement.pictures.length)
    }

    return (
       <div className='carrousel'>
           <img className='carrouselImg' src={dataHebergement.pictures?.[activeIndex]} alt={dataHebergement.title}/>
           <img className='arrowPrevious' src={ArrowPrevious} alt="Arrow previous" onClick = {previousImage} />
           <img className='arrowNext' src={ArrowNext} alt="Arrow Next" onClick = {nextImage} />
       </div>
    )
}


