import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyContent() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>React Bootstrap</Card.Title>
        <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis molestiae commodi incidunt reiciendis voluptatum laboriosam ut cumque debitis veritatis earum harum vel ducimus esse aliquam, ipsa autem assumenda sunt soluta?
        </Card.Text>
        <Button variant="primary">clique aqui</Button>
      </Card.Body>
    </Card>
  );
}

export default MyContent;