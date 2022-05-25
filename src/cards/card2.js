import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Card2 = () => {
    return ( 
        <div className="card2">
           <Card style={{ width: '33rem' }}>
  <Card.Img variant="top" src="./images/toys.gif"/>
  <Card.Body>
    <Card.Title>Give Toys</Card.Title>
    <Card.Text>
    "Every child, as he grows up, deserves toys to play with. Toys not only entertain the child, but also help in the child’s better understanding."
    </Card.Text>
    <Button href="https://en.wikipedia.org/wiki/Toy_drive" variant="outline-primary">Visit Site</Button>
  </Card.Body>
</Card> 
        </div>
     );
}
 
export default Card2;