import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
// import { BsFillStarFill } from 'react-icons/bs'; // Import the Bootstrap icon as a React component

const Pducts = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/9');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="img-fluid mb-3" />
            <p>{product.description}</p>
          </div>
          <div className="col-md-6">
            <p>Price: ${product.price}</p>
            <p>
              Rating: {' '}
              {[...Array(Math.floor(product.rating.rate))].map((_, index) => (
                <i className="bi bi-star-fill text-warning" key={index}></i>
                // <BsFillStarFill key={index} className="text-warning" />
              ))}
              ({product.rating.count} reviews)
            </p>
            {/* Other product details */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};



export default Pducts;
