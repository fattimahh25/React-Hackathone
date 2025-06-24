import React from 'react';
function ProductDetailModal({ product, onClose }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        background: '#fff',
        padding: '20px',
        width: '400px',
        borderRadius: '10px',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>X</button>
        <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
        <h2>{product.title}</h2>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailModal;
