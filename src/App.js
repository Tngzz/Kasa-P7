import { BrowserRouter } from 'react-router-dom';
import PublicRouter from './pages/PublicRouter';
import { GlobalStyle } from './utils/style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <PublicRouter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
