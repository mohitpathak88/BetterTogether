import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom';



const SignIn = () => {

    const [formData, setFormData] = React.useState({
        email2:"",
        password2:""
    })

    const handleClick = async(e) => {
        e.preventDefault() ; 
        const res = await axios.post("http://localhost:5000/api/login2",formData) ; 
        console.log(res)
        //if(res.status === 200)
         //return <Redirect to= "/req"/>
    }

    return ( 
      <div className="box">
      <form action="">
          <input type="text" class="input-field" placeholder=" E-mail" onChange={(e) => setFormData({...formData,email2:e.target.value})} />
          <input type="password" class="input-field" placeholder=" Password" onChange={(e) => setFormData({...formData,password2:e.target.value})} />
          <Button variant="dark" onClick={handleClick}>Submit</Button>{' '}
          

      </form>
  </div>
     );
}
 
export default SignIn;