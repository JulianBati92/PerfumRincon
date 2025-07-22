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
    backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/perfumrincon-3dae2.appspot.com/o/fondoperfumrincon.jpg?alt=media&token=63d00890-fb53-4f87-a23b-27b6581a4442')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    minHeight: '100vh',
    opacity: 0.5,
  };

  return (
    <CartContextProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1" style={backgroundStyle}>
          <div>
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
