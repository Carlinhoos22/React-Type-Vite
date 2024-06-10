import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MyCard () {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/img-hero1.jpg" />
      <Card.Body>
        <Card.Title>Fase de treino</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium atque unde dolorem soluta deleniti tenetur nisi praesentium quam iusto incidunt mollitia aut odio, voluptates omnis officiis facere, inventore temporibus!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;