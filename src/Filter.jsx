const Filter = () => {
    return ( 
        <div className="filter">
            <div className="topnav">
  <a className="active" href="#home">BY NAME</a>
  <a href="#about">BY CITY</a>
  <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search by Name.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
</div>

<div className="search">
  <h2>Search for the NGO where you want to donate</h2>
  </div>
</div>
     );
}
 
export default Filter;