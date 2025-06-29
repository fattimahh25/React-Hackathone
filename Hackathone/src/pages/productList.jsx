import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/productCards';
import ProductDetailModal from '../components/productDetailModal';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products') // Fake product API
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='Pruduct-list' style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '30px',justifyContent: 'center',margintop: '80px' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
      ))}

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default ProductList;
