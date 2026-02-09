import './App.css'
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App
