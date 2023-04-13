import { useState } from 'react';
import './style.css';
import Arrow from '../../assets/arrow.png';
import Data from '../../data/data.json';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';

export default function collapseHebergement ({description, equipments}) {
    const { id } = useParams();
  
    const hebergementActuel = Data.find((item) => item.id === id);
    
    const [isOpen, setIsOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false)

function handleClick () {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
}
    return (   
        <>
            <div className="hebergementCollapse">
                    <div className="hebergementCollapseItem">
                        <Collapse title={'Description'} texte={hebergementActuel.description} />    
                    </div>
                    <div className="hebergementCollapseItem">
                        <Collapse title={'Equipements'} texte={Array.isArray(hebergementActuel.equipments) ? hebergementActuel.equipments.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                        }) : hebergementActuel.equipments} />
                    </div>  
            </div>

        </>  
    )
   
}


