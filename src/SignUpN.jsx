import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react'
import axios from 'axios'

const SignUpN = () => {

    const [formData,setFormData] = React.useState({
        name2:"",
        email2:"",
        password2:"",
        address:"",
        city:"",
        state:"",
        pincode:"",
        phone_number1:"",
        phone_number2:"",
    })

    const handleClick = async(e) => {
        e.preventDefault() ; 
        // console.log(formData)
        const res = await axios.post("http://localhost:5000/api/register2",formData) ; 
        console.log(res)
    }
    return ( 
      <div className="sbox">
      <div className="boxd">
      <form action="">
          <input type="text" class="input-field" placeholder=" Name" onChange={(e) => setFormData({...formData,name2:e.target.value})} />
          <input type="email" class="input-field" placeholder=" Email" onChange={(e) => setFormData({...formData,email2:e.target.value})}/>
          <input type="password" class="input-field" placeholder=" Password" onChange={(e) => setFormData({...formData,password2:e.target.value})}/>
          <input type="text" class="input-field" placeholder=" Address" onChange={(e) => setFormData({...formData,address:e.target.value})}/>
          <input type="text" class="input-field" placeholder=" City" onChange={(e) => setFormData({...formData,city:e.target.value})}/>
          <input type="State" class="input-field" placeholder=" State" onChange={(e) => setFormData({...formData,state:e.target.value})}/>
          <input type="number" class="input-field" placeholder=" PinCode" onChange={(e) => setFormData({...formData,pincode:e.target.value})}/>
          <input type="number" class="input-field" placeholder="Phone" onChange={(e) => setFormData({...formData,phone_number1:e.target.value})}/>
          <input type="number" class="input-field" placeholder="Secondary Phone" onChange={(e) => setFormData({...formData,phone_number2:e.target.value})}/>
          <Button variant="dark"  onClick={handleClick}>Submit</Button>{' '}

      </form>
  </div>
  </div>
     );
}
 
export default SignUpN;