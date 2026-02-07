import React from 'react'
import styled from 'styled-components'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"

const TrustedCompanies = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src={image1}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={image2}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={image3}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={image4}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={image5}
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 6rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 8rem;
    height: 8rem;
  }

  .brand-section-slider {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
`;

export default TrustedCompanies
