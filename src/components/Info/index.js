import './style.css'
import React from 'react';
import { AppartementPage } from '../Carrousel';
import redStar from '../../assets/red_star.png'
import greyStar from '../../assets/grey_star.png'


export default function Info () {
    
    const { dataHebergement } = AppartementPage();
    const rating = dataHebergement.rating;

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
                <div className='namePicture'>
                <h2 className='name'>{dataHebergement.host.name.split(' ')[0]} <br />{dataHebergement.host.name.split(' ')[1]}</h2>
                    <img className='profilPicture' src={dataHebergement.host.picture}></img>
                </div>
                <div className="hoteHebergementNote">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <img className='ratingStars' key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}