import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Card3 = () => {
    return ( 
        <div className="card3">
            <Card style={{ width: '33rem' }}>
  <Card.Img variant="top" src="./images/books.gif" />
  <Card.Body>
    <Card.Title>Give Books</Card.Title>
    <Card.Text>
    "The initiative helping young families read when they cannot afford to buy books"
    </Card.Text>
    <Button href="https://en.wikipedia.org/wiki/Children%27s_literature" variant="outline-primary">Visit Site</Button>
  </Card.Body>
</Card>
        </div>
     );
}
 
export default Card3;