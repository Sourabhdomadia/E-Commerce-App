import React from 'react'
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to contact</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.485328222709!2d78.48193367424052!3d17.436469983459048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a04fd3c717b%3A0x8e699472612e0500!2sMahavir%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1770379879286!5m2!1sen!2sin"
        width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <h3>Contact Us</h3>
        <div className="contact-inputs">
          <div className="contact-item">
            <div className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="contact-content">
              <span className="label">Name</span>
              <span className="value">Arjun Rampal</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="contact-content">
              <span className="label">Phone Number</span>
              <span className="value">XXXXXXX680</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    iframe {
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    }

    .container {
        margin-top: 6rem;
        max-width: 65rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0 2rem;

        h3 {
            font-size: 3.2rem;
            font-weight: 700;
            margin-bottom: 4rem;
            color: ${({ theme }) => theme.colors.heading};
            text-transform: capitalize;
            position: relative;
            display: inline-block;
            
            &::after {
                content: '';
                position: absolute;
                bottom: -1rem;
                left: 50%;
                transform: translateX(-50%);
                width: 60%;
                height: 4px;
                background: linear-gradient(90deg, rgb(98 84 243), rgb(132 144 255));
                border-radius: 2px;
            }
        }

        .contact-inputs {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            background: linear-gradient(135deg, rgba(98, 84, 243, 0.05), rgba(132, 144, 255, 0.05));
            backdrop-filter: blur(10px);
            padding: 4rem 3rem;
            border-radius: 2rem;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border: 1px solid rgba(98, 84, 243, 0.1);

            .contact-item {
                display: flex;
                align-items: center;
                gap: 2rem;
                padding: 2.5rem 3rem;
                background: #ffffff;
                border-radius: 1.5rem;
                box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
                border: 2px solid transparent;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 5px;
                    height: 100%;
                    background: linear-gradient(180deg, rgb(98 84 243), rgb(132 144 255));
                    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                &:hover {
                    transform: translateY(-0.5rem);
                    box-shadow: rgba(98, 84, 243, 0.25) 0px 12px 28px;
                    border-color: rgba(98, 84, 243, 0.2);

                    &::before {
                        width: 100%;
                        opacity: 0.08;
                    }

                    .icon-wrapper {
                        transform: scale(1.1) rotate(5deg);
                        background: linear-gradient(135deg, rgb(98 84 243), rgb(132 144 255));
                    }
                }

                .icon-wrapper {
                    flex-shrink: 0;
                    width: 5.5rem;
                    height: 5.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, rgba(98, 84, 243, 0.1), rgba(132, 144, 255, 0.1));
                    border-radius: 1.2rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

                    svg {
                        width: 2.8rem;
                        height: 2.8rem;
                        color: rgb(98 84 243);
                        transition: color 0.4s ease;
                    }
                }

                .contact-item:hover .icon-wrapper svg {
                    color: #ffffff;
                }

                .contact-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    flex: 1;

                    .label {
                        font-size: 1.3rem;
                        font-weight: 600;
                        color: rgba(0, 0, 0, 0.5);
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }

                    .value {
                        font-size: 2rem;
                        font-weight: 600;
                        color: ${({ theme }) => theme.colors.text};
                        letter-spacing: 0.5px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1.5rem;

            h3 {
                font-size: 2.6rem;
            }

            .contact-inputs {
                padding: 3rem 2rem;

                .contact-item {
                    padding: 2rem 2rem;
                    gap: 1.5rem;

                    .icon-wrapper {
                        width: 4.5rem;
                        height: 4.5rem;

                        svg {
                            width: 2.2rem;
                            height: 2.2rem;
                        }
                    }

                    .contact-content {
                        .label {
                            font-size: 1.1rem;
                        }

                        .value {
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }
`;
export default Contact
