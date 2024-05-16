import Card from 'react-bootstrap/Card';

function MyCard () {
  return (
    <Card border="info" style={{ width: '18rem' }}>
    <Card.Header>Testando</Card.Header>
    <Card.Body>
        <Card.Title>Teste 123</Card.Title>
        <Card.Text>
            praticando e exercitando React com Bootstrap
        </Card.Text>
    </Card.Body>
    </Card>
  );
}

export default MyCard;