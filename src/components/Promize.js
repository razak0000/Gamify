import React, { useState, useEffect } from 'react';

function ProductCards() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => setError(error));
  }, []);

  return (
    <div>
      {error && <p>Error fetching products: {error.message}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin:'40px 10px auto 30px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3 style={{ fontSize: '16px' }}>{product.title}</h3>
            <p style={{ fontSize: '14px' }}>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
