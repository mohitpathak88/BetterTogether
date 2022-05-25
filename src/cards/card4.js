import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Card4 = () => {
    return (  
        <div className="card4">
            <Card style={{ width: '33rem' }}>
  <Card.Img variant="top" src="./images/food.gif" />
  <Card.Body>
    <Card.Title>Give Food</Card.Title>
    <Card.Text>
    "The most alarming figure revealed is that approximately 4500 children die every day 
       under the age of five years in the country due to hunger and malnutrition, 
       amounting to over three lakh deaths every year, owing to hunger, of children alone".
    </Card.Text>
    <Button href="https://en.wikipedia.org/wiki/Food_bank" variant="outline-primary">Visit Site</Button>
  </Card.Body>
</Card>
        </div>
    );
}
 
export default Card4;