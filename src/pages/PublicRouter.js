import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Hebergements from './FicheLogement';
import About from './About';
import Error from '../components/Error';

const PublicRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/hebergements/:id' element={<Hebergements />} />
                <Route path="*" element={<Error />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
};

export default PublicRouter;