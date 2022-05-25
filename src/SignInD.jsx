import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react'
import axios from 'axios'



const SignIn = () => {

    const [formData, setFormData] = React.useState({
        email:"",
        password:""
    })

    const handleClick = async(e) => {
        e.preventDefault() ; 
         console.log(formData)
        const res = await axios.post("http://localhost:5000/api/login",formData) ; 
        console.log(res)
    }

    return ( 
      <div className="box">
      <form action="">
          <input type="text" class="input-field" placeholder=" E-mail" onChange={(e) => setFormData({...formData,email:e.target.value})} />
          <input type="password" class="input-field" placeholder=" Password" onChange={(e) => setFormData({...formData,password:e.target.value})} />
          <Button variant="dark" onClick={handleClick}>Submit</Button>{' '}

      </form>
  </div>
     );
}
 
export default SignIn;