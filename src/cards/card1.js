import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Cards = () => {
    return (
        <div className="card1">
        <Card style={{ width: '33rem' }}>
  <Card.Img variant="top" src="./images/Shelter.gif" />
  <Card.Body>
    <Card.Title>Give Clothes</Card.Title>
    <Card.Text>
    "The current poverty line is 1,059.42 Indian Rupees (62 PPP USD) per month in the rural areas and 1,286 Indian rupees (75 PPP USD) per month in urban areas. India's nationwide average poverty line differs from each state's poverty line."
    </Card.Text>
    <Button href="https://en.wikipedia.org/wiki/Poverty_in_India" variant="outline-primary">Visit Site</Button>
  </Card.Body>
</Card>
 </div>

      );
}
 
export default Cards;
//100px180