import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";

import Main from "./components/Pages/Main/Main";
import Login from "./components/Pages/Login/Login";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
