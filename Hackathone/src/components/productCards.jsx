function ProductCard({ product, onClick }) {
  return (
    <div onClick={onClick} style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      width: '200px',
      cursor: 'pointer'
    }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
      <h3 style={{ fontSize: '16px' }}>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;



