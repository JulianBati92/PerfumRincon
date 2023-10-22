import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryItemList from './components/CategoryItemList';
import Formulario from './components/Form';
import Checkout from './components/Checkout';
import Terminos from './components/Terminos';
import OrderForm from './components/OrderForm';
import { CartContextProvider } from './components/CartContext';

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url('')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    opacity: 0.9,
  };

  return (
    <CartContextProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1" style={backgroundStyle}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px' }}>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />}
              />
              <Route path="/category/:id" element={<CategoryItemList />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/contacto" element={<Formulario />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/order-form" element={<OrderForm />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </CartContextProvider>
  );
};

export default App;
