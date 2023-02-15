import HomeBody from "./components/HomeBody/HomeBody";
import Navbar from "./components/Navbar/Navbar";
import Leetcode from "./components/Leetcode/Leetcode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <HomeBody/>
    
    </div>
  );
}

export default App;
