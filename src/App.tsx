import './App.css'
import { useState } from 'react'
import MyNavbar from './components/MyNavbar'
import MyCard from './components/MyCard'
import Rodape from './components/Rodape/rodape'
import { Col, Container, Row } from 'react-bootstrap'
import MyContent from './components/MyContent'


function App() {
  return (
    <>
      <MyNavbar/>
      <br />
      <MyCard/>
      <br />
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
    </>
  )
}

export default App