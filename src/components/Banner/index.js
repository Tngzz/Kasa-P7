import './style.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Banner() {
    const [aboutPage, setAboutPage] = useState(false);

    const location = useLocation ();

    useEffect (() => {
        if(location.pathname === '/about'){
            setAboutPage(true)
        }
    }, [])

    return(
      
        <section className={aboutPage ? 'bannerAbout' : 'banner'}>
        
			{!aboutPage && <p className = 'TitleBanner'>Chez vous, partout et ailleurs</p>}
		</section>
    )
}

