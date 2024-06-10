import './App.css'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import AppNavbar from './components/MyNavbar'
import MyCard from './components/MyCard'
import Rodape from './components/Rodape/rodape'
import { Col, Container, Row } from 'react-bootstrap'
import imagem from './img/img-hero1.jpg'
import imagem2 from './img/img-hero3.jpg'
import imagem3 from './img/img-hero3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import c1 from './img/c1.jpeg'
import c2 from './img/c2.jpg'
import c3 from './img/c3.jpg'


function App() {
  return (
    <>
      <AppNavbar/>
      <br />
      <Container>
        <Row>
          <Card className="bg-dark text-dark">
            <Card.Img src={imagem3} alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title>TECNOLOGIA</Card.Title>
              <Card.Text>
                O incrível mundo da tecnologia
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={4}>
            <MyCard/>
          </Col>
          <Col md={4}>
            <MyCard/>
          </Col>
          <Col md={4}>
            <MyCard/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Card>
            <Card.Img variant="top" src={imagem} />
            <Card.Body>
              <Card.Text>
                Venha conhecer melhor o mundo da tecnologia, como funciona por trás dos panos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card>
            <Card.Img variant="top" src={imagem2} />
            <Card.Body>
              <Card.Text>
                Conheça exemplos de pessoas que se deram bem nesse rumo, abriram suas empresas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>   

     
    </>
  )
}

export default App