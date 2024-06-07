import Card from 'react-bootstrap/Card';

function MyCard () {
  return (
    <Card bg="dark" data-bs-theme="dark">
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}

export default MyCard;