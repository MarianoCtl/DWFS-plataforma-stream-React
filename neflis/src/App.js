import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import RoutesList from './routers/RoutesList'

function App() {
  return (
    <div className='app'>  
    <BrowserRouter>
      <Header/>
      <RoutesList/>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
