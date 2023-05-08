import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './bootstrap.min.css'
import Service from "./Pages/Service";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import CountriesList from "./Pages/Countries";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/countries" element={<CountriesList />} />
 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
