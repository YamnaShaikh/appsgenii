import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './bootstrap.min.css'
import Service from "./Pages/Service";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
