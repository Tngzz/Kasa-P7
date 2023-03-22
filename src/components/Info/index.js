import './style.css'
import React from 'react';
import { AppartementPage } from '../Carrousel';

export default function Info () {
    
    const { dataHebergement } = AppartementPage();

    return (
        <div className='info'>
            <div className='columnLeft'>
                <h1 className='nomHebergement'>{dataHebergement.title}</h1>
                <h3 className='location'>{dataHebergement.location}</h3>
                <ul className='tags'>
                    {dataHebergement.tags.map(tag => (
                        <li className='liTags' key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className='columnRight'>
                <h2 className='name'>{dataHebergement.host.name}</h2>
                <img className='profilPicture' src={dataHebergement.host.picture}></img>

            </div>
        </div>
    )
}