import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Req = () => {
    return ( 
      <div className="req">
      <div>
                  <Dropdown className='req'>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Select Requirements
        </Dropdown.Toggle>
    
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1">Financial Donation</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Clothing</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Food</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Toys and Games</Dropdown.Item>
          <Dropdown.Item href="#/action-6">Shoes and Bags</Dropdown.Item>
          <Dropdown.Item href="#/action-7">Kitchenware</Dropdown.Item>
          <Dropdown.Item href="#/action-8">Furniture</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Any Other</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <textarea className='text' id="w3review" name="w3review" rows="10" cols="80" placeholder='Specify Requirements'>

</textarea>
<div className="submit">
<Button  variant="dark">Submit</Button>
</div>
<div className="reset">
<Button  variant="dark">Reset</Button>
</div>
</div>

      
     );
}
 
export default Req;