import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/productList';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
<>
<Navbar />
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
    </>
  );
}

export default App;
