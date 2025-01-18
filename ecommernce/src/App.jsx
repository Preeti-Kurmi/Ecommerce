
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import Filterdata from './pages/filerdata';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Register from './components/Register';



import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/authSlice';
function App() {
  const role = useSelector((state) => state.auth.role);
  console.log("app",role)
  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);

  const handleLogout = () => {
    dispatch(logout());
  };

 
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="/order-place" element={<Order orders={order} />} />
          <Route path="/filterdata" element={<Filterdata />} />
          
 
 {role === 'admin' && <Route path="/addproduct" element={<AddProduct />} />}
     
         
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
