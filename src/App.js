// import logo from './logo.svg';
import './App.css';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRoutes from './CustomRoutes';

function App() {
  return (
      <Router>
        <CustomRoutes />
      </Router>
  );
}

export default App;
