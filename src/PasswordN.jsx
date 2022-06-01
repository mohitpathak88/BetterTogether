import Button from 'react-bootstrap/Button';
const Password = () => {
    return ( 
        <div className="box">
      <form action="">
          <input type="password" class="input-field" placeholder="Old Password" />
          <input type="password" class="input-field" placeholder="New Password" />
          <input type="password" class="input-field" placeholder="Re-Type New Password" />
          <Button variant="dark" >Submit</Button>{' '}
      </form>
  </div>
     );
}
 
export default Password;