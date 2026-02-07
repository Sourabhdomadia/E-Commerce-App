import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {CgClose, CgMenu} from "react-icons/cg";
import {Button} from "./Button.js";


function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <Nav>
      <div className={menuOpen ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link home-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link home-link" onClick={() => setMenuOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link home-link" onClick={() => setMenuOpen(false)}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link home-link" onClick={() => setMenuOpen(false)}>
              <RoundedButton>Contact</RoundedButton>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setMenuOpen(true)}/>
          <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setMenuOpen(false)}/>
        </div>
      </div>
    </Nav>
  );

}

// Rounded button specifically for the navbar contact button
const RoundedButton = styled(Button)`
  border-radius: 5rem;
`;

const Nav = styled.nav`
  overflow-x: hidden;
  width: 100%;
  
  .navbar {
    position: relative;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: ${({ theme }) => theme.colors.black};
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  .user-login--name {
    text-transform: capitalize;
  }
  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 10000;
      border: none;
      background: transparent;

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
        cursor: pointer;
      }
    }

    .active .mobile-nav-icon {
      display: none;
    }
    
    .active .close-outline {
      display: inline-block;
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
      z-index: 10000;
      cursor: pointer;
    }
    
    .navbar-lists {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s linear;
    }
    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 0.3s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

export default NavBar
