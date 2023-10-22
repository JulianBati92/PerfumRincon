import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const CategoryItemList = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const firebaseConfig = {
      apiKey: "AIzaSyDKzSGCrzgKDRrF7WzMy2Jfc6aeHFYWIX0",
      authDomain: "prayformojo-4a625.firebaseapp.com",
      projectId: "prayformojo-4a625",
      storageBucket: "prayformojo-4a625.appspot.com",
      messagingSenderId: "591740997621",
      appId: "1:591740997621:web:acdf0a76d021fadc6adabc",
      measurementId: "G-6STXJP9QFE"
    };

    const db = getFirestore();

    const categoryRef = collection(db, 'category');

    const queryRef = query(categoryRef, where('set', '==', id));

    getDocs(queryRef)
      .then((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });
        setCategoryProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener productos desde Firestore: ', error);
      });
  }, [id]);

  return (
    <div className="container mt-4 text-center" style={{ marginBottom: '200px' }}>
      <h1>Categoría {id}</h1>

      {loading && (
        <div>
          <p>Cargando productos...</p>
          <img src="/loading-45.gif" alt="Cargando productos" style={{ width: '50px', height: '50px' }} />
        </div>
      )}

      {!loading && (
        <div className="row">
          {categoryProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Descripción: {product.description}</p>
                  <p className="card-text">Precio: {product.price} U$S</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <Link to={`/item/${product.id}`} className="btn btn-primary">
                    Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItemList;
