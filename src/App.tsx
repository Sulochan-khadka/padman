import './App.css';
import Sanitary from './components/Productspage/Sanitary';
import Hero from './components/hero/Hero';
import Layout from './components/layout/layout';
import AddProduct from '../src/components/navbar/AddProducts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/cartpage/Cart';
import Login from './components/userRegister/Login';
import Registration from './components/userRegister/Registration';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={ <Hero />}/>
          <Route path='/singleproduct/:id' element={<Sanitary />} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration/>} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
