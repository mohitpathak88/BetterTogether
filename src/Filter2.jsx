import Button from 'react-bootstrap/Button';
const Filter2 = () => {
    return ( 
        <div className="filter2">
            <div className="topnav">
  <a href="/filter">BY NAME</a>
  <a  className="active" href="">BY CITY</a>
  <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search by City.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
      <a className="password" href="/passwordD">Change Password</a>
      <Button variant="Primary" >Submit</Button>{' '}

    </form>
  </div>
</div>

<div className="search">
  <h2>Search for the NGO where you want to donate</h2>
  </div>
        </div>
     );
}
 
export default Filter2;