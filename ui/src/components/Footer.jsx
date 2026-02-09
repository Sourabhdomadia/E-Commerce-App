import React from 'react'
import styled from "styled-components";
import {Button} from "./Button.js";
import {NavLink} from "react-router-dom";
import {FaDiscord, FaInstagram, FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
       <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <Button className="btn hireme-btn">
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
       </section>

      <footer>
        <div className="footer-container">
          <div className="grid grid-two-column">
            <div className="footer-about">
              <h3>eCommerce</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque!</p>
            </div>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons"/>
                </div>
                <div>
                  <FaInstagram className="icons"/>
                </div>
                <div>
                  <a href="https://www.youtube.com/@Google"
                      target="_blank">
                    <FaYoutube className="icons"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr/>
          <div className="container grid grid-two-column last-child">
            <p>@{new Date().getFullYear()} eCommerce. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({theme}) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({theme}) => theme.colors.shadowSupport};
        transform: translateY(50%);

        .grid div:last-child {
            justify-self: end;
            align-self: center;
        }
    }

    footer {
        padding: 14rem 0 9rem 0;
        background-color: ${({theme}) => theme.colors.footer_bg};

        .footer-container {
            max-width: 80rem;
            margin: 0 auto;
            padding: 0 6rem;

            .grid {
                gap: 5rem;
            }
        }

        h3 {
            color: ${({theme}) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }

        p {
            color: ${({theme}) => theme.colors.white};
        }

        .footer-social--icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({theme}) => theme.colors.white};

                .icons {
                    color: ${({theme}) => theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }
    }

    .footer-bottom--section {
        padding-top: 9rem;

        hr {
            margin-bottom: 2rem;
            color: ${({theme}) => theme.colors.hr};
            height: 0.1px;
        }
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .contact-short {
            max-width: 80vw;
            margin: 4.8rem auto;
            transform: translateY(0%);
            text-align: center;

            .grid div:last-child {
                justify-self: center;
            }
        }

        footer {
            padding: 9rem 0 9rem 0;

            .footer-container {
                max-width: 100%;
                padding: 0 2rem;

                .grid {
                    gap: 3rem;
                }
            }
        }

        .footer-bottom--section {
            padding-top: 4.8rem;
        }
    }
`;

export default Footer
