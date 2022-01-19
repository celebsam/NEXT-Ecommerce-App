import React from "react";
import Head from "next/head";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Samishop</title>
      </Head>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link href="/">
            <a>
              <Navbar.Brand href="#home">Samishop</Navbar.Brand>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link href="/cart">
                <a>
                  <Nav.Link href="#home">Cart</Nav.Link>
                </a>
              </Link>
              <Link href="/login">
                <a>
                  <Nav.Link href="#link">Login</Nav.Link>
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <p>All rights reserved. Samishop</p>
      </footer>
    </div>
  );
};

export default Layout;
