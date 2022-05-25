import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import Cards from './cards/card1';
import Card2 from './cards/card2';
import Card3 from './cards/card3';
import Card4 from './cards/card4';
import SignUp from './SignUpD';
import SignUpN from './SignUpN';
import SignInD from './SignInD';
import SignInN from './SignInN';


const Home = () => {
    return ( 
        <div className="homepage">
            <Dropdown className='primary'>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    SignUp
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/SignUpD">As Donor</Dropdown.Item>
    <Dropdown.Item href="/SignUpN">As NGO</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


            
            <Dropdown className='signin'>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    SignIn
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/SignInD">As Donor</Dropdown.Item>
    <Dropdown.Item href="/SignInN">As NGO</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
     <div className="content"><h1>"Giving is greater than worship"</h1></div>
     <div className="allCards">
     <Cards/>
     <Card4/>
     <Card3/>
     <Card2/>
     <div className="aboutUs">
     <hr className="footer" />
     <h2><b><u>About Us</u></b></h2>
     <p>We are a NGO web portal which will help bringing maximum NGOs together so that people</p><br />
     <p>can donate to people who are in need and help india to grow.</p>
     </div>
     </div>
        </div>
     );
}
 
export default Home;