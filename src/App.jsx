import { useState } from 'react';
import Topbar from "./Components/topbar/Topbar";
import Sidebar from './Components/sidebar/Sidebar';
import "./app.css";
import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import ProductList from './Pages/ProductList/ProductList';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './Pages/UserList/UserList';
import NewUser from './Pages/NewUser/NewUser';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newuser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/newproduct" element={<NewProduct/>}/>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
