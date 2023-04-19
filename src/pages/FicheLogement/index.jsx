import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json';
import Error from '../../pages/Error';
import Carrousel from '../../components/Carrousel';
import Info from '../../components/Info';
import CollapseHebergement from '../../components/CollapseHebergement';


export default function MyComponent() {
    const { id } = useParams();
  
    const hebergementActuel = Data.find((item) => item.id === id);
  
    if (!hebergementActuel) {
      return <Error />;
    } else {
      return <Hebergements hebergementActuel={hebergementActuel} />;
    }
  }
  
  export function Hebergements(props) {
    const { hebergementActuel } = props;
    
    return (
      <div>
        <Header />
        <Carrousel dataHebergement={hebergementActuel} />
        <Info />
        <CollapseHebergement />
        <Footer />
      </div>
    );
  }
  
