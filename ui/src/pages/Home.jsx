import React from 'react'
import AboutSection from "../components/AboutSection.jsx";
import Services from "../components/Services.jsx";
import TrustedCompanies from "../components/TrustedCompanies.jsx";
import FeatureProduct from "../components/FeatureProduct.jsx";

const Home = () => {

  const description = "We are a leading e-commerce store dedicated to providing our customers with an exceptional online shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, while ensuring excellent customer service and fast delivery."

  return (
    <>
      <AboutSection desc={description} />
      <FeatureProduct />
      <Services />
      <TrustedCompanies />
    </>
  )
}
export default Home
