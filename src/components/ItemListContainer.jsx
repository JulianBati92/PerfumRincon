import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { db } from '../main';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coleccionProductos = collection(db, "products");
        const querySnapshot = await getDocs(coleccionProductos);
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (error) {
        console.error('Error al obtener los productos: ', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="container mt-4 text-center" style={{ marginBottom: '200px' }}>
      <h1>Bienvenido a PerfumRincon</h1>
      <p>{greeting}</p>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '500px', objectFit: '' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Precio: ${product.price} </p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};


