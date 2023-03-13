import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Banner from '../../components/Banner/index';


export default function Home () {
    return (
        <div className='Home'>  
            <Header />
            <Banner />
            <h1>Home</h1>
            <Footer/>
            
        </div>
    );
};