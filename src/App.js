import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Categories from './layouts/Categories';
import ProductList from './pages/ProductList';
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi'

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
