import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Hebergements from './FicheLogement';
import About from './About';
import Eroor from './Error';

const PublicRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/hebergements' element={<Hebergements />} />
                <Route path='/error' element={<Eroor />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
};

export default PublicRouter;