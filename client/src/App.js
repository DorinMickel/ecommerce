import './App.css';
import ProductList from './pages/ProductList';
import NavbarContainer from './pages/NavbarContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Payment from './pages/Payment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarContainer/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="products" element={<ProductList/>} />
          <Route path="payment" element={<Payment/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
