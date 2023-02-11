import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { StockSearchBar } from "../api/stock.component";
import "./navigationbar.css";

export const NavigationBar = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand>Option House</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#home">Search</Nav.Link>
          <Nav.Link href="#home">Your Stocks</Nav.Link>
        </Nav>
        <StockSearchBar />
      </Navbar>
    </Container>
  );
};
