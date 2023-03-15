import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json'

export default function MyComponent() {
    const idHebergement = useParams('id').id;
    console.log(idHebergement)
    const hebergementActuel = Data.find((item) => item.id === id);
    if(hebergementActuel.length === 0){
        return <Error />}
        else{
            return <Hebergements />
        }
    
  }



  export function Hebergements () {
    return (
        <div>
            <Header />
            <h1>Hebergements</h1>
            <Footer />
        </div>
        
    )
}
 