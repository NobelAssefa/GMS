import { useState } from 'react';
import Topbar from "./Components/topbar/Topbar";
import Sidebar from './Components/sidebar/Sidebar';
import "./app.css";
import Home from './Pages/Home/Home';

import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './Pages/UserList/UserList';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
