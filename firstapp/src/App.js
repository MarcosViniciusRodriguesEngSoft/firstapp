import React from "react";
import CarouselHome from "./Components/CarouselHome";
import NavBar from "./Components/NavBar";
import CardsProducts from './Components/CardsProducts/index';
import { Container, Row } from "react-bootstrap";
import CardsDigimon from './Components/CardsDigimon/index';


function App() {
  return (
  <>
    <NavBar/>
    <CarouselHome/>
    <br/>
    <Container>
      <hr/>
      <h1>Tecnologia</h1>
      <Row>
        <CardsProducts/>
      </Row>
      <br/>
      <hr/>
      <h1>Digimons</h1>
      <Row>
        <CardsDigimon/>
      </Row>
    </Container>
  </>
  );
}

export default App;
