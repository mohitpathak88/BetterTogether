import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import bgImage from './assests/Ghost.mp4';
import image1 from './assests/image1.gif';
const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="bgimage">
       <img src={image1} alt="" />
     </div>
            <div className="overlay"></div>
            {/*<video autoPlay loop muted>
                <source src={bgImage} type="video/mp4" />
    </video>*/}

            <h1 className='heading'>Better Together</h1>
            
            

        </nav>
    );
}
 
export default Navbar;