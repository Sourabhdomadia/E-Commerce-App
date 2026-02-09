import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <span>/</span>
      <span className="current-page">{title}</span>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding: 0 4.8rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;

  a {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.btn};
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    opacity: 0.85;

    &:hover {
      color: ${({ theme }) => theme.colors.helper};
      opacity: 1;
    }
  }

  span {
    margin: 0 1.5rem;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.helper};
    font-weight: 300;
    opacity: 0.6;
  }

  .current-page {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
    font-size: 2.4rem;

    a {
      font-size: 2.4rem;
    }

    span {
      font-size: 2.4rem;
      margin: 0 1rem;
    }

    .current-page {
      font-size: 2.4rem;
    }
  }
`;

export default PageNavigation;
