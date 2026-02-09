import React from 'react'
import AboutSection from "../components/AboutSection.jsx";

const About = () => {

  const description = "We are a leading e-commerce platform dedicated to revolutionizing your online shopping experience. Since our inception, we have been committed to providing our customers with an exceptional selection of high-quality products at competitive prices, all while maintaining the highest standards of customer service and satisfaction. Our mission goes beyond just selling products – we aim to create a seamless, enjoyable, and trustworthy shopping environment where customers can discover everything they need with confidence and ease. From the latest trends to everyday essentials, we carefully curate our inventory to ensure every item meets our stringent quality standards. With fast and reliable delivery, secure payment options, and a dedicated customer support team available around the clock, we're here to make your shopping journey as smooth and delightful as possible."

  return (
    <AboutSection desc={description}/>
  )
}
export default About
