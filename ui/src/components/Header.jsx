import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import logo from "../assets/logo.png";
import NavBar from "./Navbar.jsx";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <NavBar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  width: 100%;

  img {
    height: 5rem;
    z-index: 10000;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default Header
