import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage'; 
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage'; 
import Navbar from './widgets/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/services/:id' element={<ServicePage />} />
      </Routes>
    </>
  );
}

export default App;