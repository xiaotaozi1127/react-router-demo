import './App.css';
import { Route } from "react-router-dom"
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
      <Route path="/products/:productId">
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App



