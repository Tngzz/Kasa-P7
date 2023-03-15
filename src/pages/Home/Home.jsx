import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Banner from '../../components/Banner/index';
import Gallery from '../../components/Gallery/index';


export default function Home () {
    return (
        <div className='Home'>  
            <Header />
            <Banner />
            <Gallery />
            <Footer/>
            
        </div>
    );
};