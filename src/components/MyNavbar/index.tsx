import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CESMAC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicial</Nav.Link>
            <Nav.Link href="#features">Sobre</Nav.Link>
            <Nav.Link href="#pricing">Dúvidas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MyNavbar;