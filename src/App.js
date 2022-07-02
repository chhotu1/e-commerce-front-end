// import logo from './logo.svg';
import './App.css';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Components/web-app/Header';
import Footer from './Components/web-app/Footer';
import CustomRoutes from './CustomRoutes';
function App() {
  return (
    <>
      
      <Router>
      <Header />
       
        <CustomRoutes/>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
