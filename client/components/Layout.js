import React from "react";
import Link from "next/link";
import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;

}

body {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}
`;

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  header {
    background-color: #f44336;
    box-shadow: 0 1rem 2rem #ddd;
  }
  nav {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    a {
      padding: 1rem 1.5rem 1rem 0;
      display: inline-block;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  main {
    flex-grow: 1;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
  }
`;

const NavLink = ({ children, to }) => (
  <Link href={to}>
    <a>{children}</a>
  </Link>
);

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <GlobalStyle />
      <header>
        <nav>
          <NavLink to="/">Bread & Butter</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </nav>
      </header>

      <main>{children}</main>
    </LayoutStyle>
  );
};

export default Layout;