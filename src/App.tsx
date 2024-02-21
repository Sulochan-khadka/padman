import './App.css';
import Sanitary from './components/Productspage/Sanitary';
import Hero from './components/hero/Hero';
import Layout from './components/layout/layout';
import AddProduct from '../src/components/navbar/AddProducts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={ <Hero />}/>
          <Route path='/sanitary-pad' element={<Sanitary />} />
          <Route path='/addproduct' element={<AddProduct/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
