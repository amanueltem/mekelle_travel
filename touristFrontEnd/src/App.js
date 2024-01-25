import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookNow from "./components/book/BookNow";
import BuyTourPackage from "./components/package/BuyTourPackage";
import Places from "./components/destination/Places";
import Map from "./components/map/Map";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import PayforBook from "./components/payment/PayforBook";
import PayforPackage from "./components/payment/PayforPackage";
import Contact from "./components/ContactUs/Contact";
import { AuthProvider } from './components/profile/AuthContext';
import Navigation from './components/profile/Navigation';
import "./index.css";
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <AuthProvider>
         
        <Routes>
          <Route path="/" element={ <div><Navigation/><HomePage/></div>} />
          <Route path="/book-now" element={<div><Navigation/><BookNow/></div>} />
          <Route path="/buy-tour-package" element={<div><Navigation/><BuyTourPackage/></div>} />
          <Route path="/places" element={<div><Navigation/><Places/></div>} />
          <Route path="/map" element={<div><Navigation/><Map/></div>} />
          <Route path="/Contact" element={<div><Navigation/><Contact/></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<div><Navigation/><Register/></div>} />
          <Route path="/payforbook" element={<div><Navigation/><PayforBook/></div>} />
          <Route path="/payforpackage" element={<div><Navigation/><PayforPackage/></div>} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
