import './App.css'
import { useState } from 'react'
import MyNavbar from './components/MyNavbar'
import { Col, Container, Row } from 'react-bootstrap'


function App() {
  return (
    <>

      <MyNavbar/> 
      {/*CONTROLE DE ROTAS*/}
      <Container>
        <Row>
          <Col md={4}>Coluna1</Col>

          <Col md={4}>Coluna2</Col>

          <Col md={4}>Coluna3</Col>
        </Row>
      </Container>


    </>
  )
}

export default App