import React from 'react';
import './style.css';
import Data from '../../data/data.json';
import Card from '../Card/index';

function Gallery () {
    return (
        <div className='homeGallery'>
            {Data.map(Data => {
                return (
                    <Card 
                        key={Data.id}
                        id={Data.id}
                        title={Data.title}
                        cover={Data.cover}
                    />
                )})}
        </div>
    );
}

export default Gallery;