import React from "react";
import "./App.css";
import "./screens/HomeScreen";
import HomeScreen from "./screens/HomeScreen";
import "./screens/LoginScreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
         <LoginScreen/> 
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
