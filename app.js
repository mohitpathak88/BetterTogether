const express = require('express');
const mongoose = require('mongoose');
const User2 = require('./models/donor');
const User1 = require('./models/ngo');
const bodyParser = require('body-parser');      //Used for parsing json by express
const bcrypt = require('bcryptjs');         //Library Used for hashing passwords
const jwt = require('jsonwebtoken')
const cors = require("cors");


const JWT_SECRET = 'ksdvwelknfjhfd9*#U@(NNjndsjqnefibwidbciapwuwr02e$'      //Secret Key
const app = express();


//Database
const dbURI = 'mongodb+srv://MohitPathak:hello123@bettertogether.cds6m.mongodb.net/MinorProject?retryWrites=true&w=majority'; 
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err)); 



//Middlewares:
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true })); 
app.listen(5000);
app.use(bodyParser.json())      //Middleware to decode the body that is coming in
app.use(cors("*")) ; 



app.get('/', (req, res) => {
    const NGOs = [
        {title: 'Goonj Ngo', snippet:'Clothes', body: 'Needs clothes for children'}
    ];
    res.render('index2', {NGOs});
});



app.get('/changepassworddonor', (req, res) => {
    res.render('changePasswordDonor');
});
app.post('/api/change-password', async (req, res) => {
    //To check only the logged in user can change the password:
    const { token, newpassword: plainTextPassword } = req.body      //Receiving the current token present in body

    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid Password' })
    }
    if(plainTextPassword.length < 4) {
        return res.json({ status: 'error', error: 'Password to small. Should be atleast 4 characters' })
    }

    try {
        const user = jwt.verify(token, JWT_SECRET)      //Both the two arguments verify and decode the user
        const _id = user.id
    
        const password = await bcrypt.hash(plainTextPassword, 10)
        await User2.updateOne(
            { _id },
            {
                $set: {password}
            }
        )
        res.json({ status: 'ok' })

    } catch (error) {
        res.json({ status: 'error', error: ';))'})
    }
})



app.get('/logindonor', (req, res) => {
    res.render('loginDonor');
});
app.post('/api/login',  async (req, res) => {
    //Firstly verifying whether the email and password sent by user are correct or not before authorizing then with a JSON token
    const { email, password } = req.body
    //Finding a particular email
    const user = await User2.findOne({ email }).lean()        //.lean() return only the simple JSON representation of the document 
    //If email not found
    if (!user) {
        return res.json({ status: 'error', error: "Invalid email/password!"})
    }

    if (await bcrypt.compare(password, user.password)){     //Now comparing the textual password and the hashed password in database
        //if any similiarity is found b/w both, it enters the condition, then that means the email and password combination is successful

        const token = jwt.sign({            //Generating token using package jwt. (Its parameters can be a string or an object)
                id: user._id,           //User's id
                email: user.email       //User's email
            },  
            JWT_SECRET      //Secret Key defined above
        )
       // console.log("GG")
        //console.log(email)
        //console.log(password)
        return res.json({ status: 'ok', data: token })          //data would be the token
    }
    res.json({ status: 'error', error: "Invalid email/password!"})
})    




app.get('/signupdonor', (req, res) => {
    res.render('signupDonor');
});
app.post('/api/register', async (req, res) => {         //Async coz we ll make bunch of database calls
    //console.log(req.body);
    const {name, email, password: plainTextPassword} = req.body      //Getting email and passwords
   
    //Basic Errors during registration
    if(!name || typeof name !== 'string') {         //If name is empty or type of name is not string then return error
        return res.json({ status: 'error', error: 'Invalid Name' })
    }
    if(!email || typeof email !== 'string') {
        return res.json({ status: 'error', error: 'Invalid Email' })
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid Password' })
    }
    if(plainTextPassword.length < 4) {
        return res.json({ status: 'error', error: 'Password to small. Should be atleast 4 characters' })
    }

    //Hashing Passwords for storing it in the database as encrypted:
    const password = await bcrypt.hash(plainTextPassword, 10)     //Second argument is the number of becrypt iterations you want to run (use small no)
    //console.log(await bcrypt.hash(password, 10))
    //Note: Everytime we hash a password, it returns a different encryption

    try {
        const response = await User2.create({
            name,
            email,
            password
        })
        console.log('User created successfully: ', response)
    }   catch (error) {
            if(error.code === 11000){       //error 11000 -> duplicate key error
                return res.json({ status: 'error', error: 'Email already in use' })
            }
        throw error         //Some other error
    }

    res.json({ status: 'ok' })
});



app.get('/loginngo', (req, res) => {
    res.render('loginNgo');
});
app.post('/api/login2',  async (req, res) => {
    //Firstly verifying whether the email and password sent by user are correct or not before authorizing then with a JSON token
    const { email2, password2 } = req.body
    //Finding a particular email
    const user2 = await User1.findOne({ email2 }).lean()        //.lean() return only the simple JSON representation of the document 
    //If email not found
    if (!user2) {
        return res.json({ status: 'error', error: "Invalid email/password!"})
    }

    if (await bcrypt.compare(password2, user2.password2)){     //Now comparing the textual password and the hashed password in database
        //if any similiarity is found b/w both, it enters the condition, then that means the email and password combination is successful

        const token = jwt.sign({            //Generating token using package jwt. (Its parameters can be a string or an object)
                id: user2._id,           //User's id
                email2: user2.email2       //User's email
            },  
            JWT_SECRET      //Secret Key defined above
        )
        return res.json({ status: 'ok', data: token })          //data would be the token
    }
    res.json({ status: 'error', error: "Invalid email/password!"})
}) 


app.get('/signupngo', (req, res) => {
    res.render('signupNgo');
});
app.post('/api/register2', async (req, res) => {         //Async coz we ll make bunch of database calls
    //console.log(req.body);
    const {name2, email2, password2: plainTextPassword, phone_number1, phone_number2, address, city, state, pincode} = req.body      //Getting email and passwords
   
    //Basic Errors during registration
    if(!name2 || typeof name2 !== 'string') {         //If name is empty or type of name is not string then return error
        return res.json({ status: 'error', error: 'Invalid Name' })
    }
    if(!email2 || typeof email2 !== 'string') {
        return res.json({ status: 'error', error: 'Invalid Email' })
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid Password' })
    }
    if(plainTextPassword.length < 4) {
        return res.json({ status: 'error', error: 'Password to small. Should be atleast 4 characters' })
    }

    //Hashing Passwords for storing it in the database as encrypted:
    const password2 = await bcrypt.hash(plainTextPassword, 10)     //Second argument is the number of becrypt iterations you want to run (use small no)
    //console.log(await bcrypt.hash(password, 10))
    //Note: Everytime we hash a password, it returns a different encryption

    try {
        const response = await User1.create({
            name2,
            email2,
            password2,
            phone_number1,
            phone_number2,
            address,
            city,
            state,
            pincode
        })
        console.log('User created successfully: ', response)
    }   catch (error) {
            if(error.code === 11000){       //error 11000 -> duplicate key error
                return res.json({ status: 'error', error: 'Email/Phone Number already in use' })
            }
        throw error         //Some other error
    }

    res.json({ status: 'ok' })
});

app.get('/changepasswordngo', (req, res) => {
    res.render('changePasswordNgo');
});
app.post('/api/change-password2', async (req, res) => {
    //To check only the logged in user can change the password:
    const { token, newpassword2: plainTextPassword } = req.body      //Receiving the current token present in body
    //console.log(plainTextPassword);
    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid Password' })
    }
    if(plainTextPassword.length < 4) {
        return res.json({ status: 'error', error: 'Password to small. Should be atleast 4 characters' })
    }

    try {
        const user = jwt.verify(token, JWT_SECRET)      //Both the two arguments verify and decode the user
        const _id = user.id
        //console.log(_id2);
        //console.log(email2);
        const password2 = await bcrypt.hash(plainTextPassword, 10)
        await User1.updateOne(
            { _id },
            {
                $set: {password2}
            }
        )
        res.json({ status: 'ok' })

    } catch (error) {
        res.json({ status: 'error', error: ';))'})
        console.log(error)
    }
})



app.get('/req', (req, res) => {
    res.render('createRequestNgo');
});

app.post('/api/request', async (req, res) => {
    const { requirement, details, token} = req.body      //Receiving the current token present in body

    try {
        const user = jwt.verify(token, JWT_SECRET)      //Both the two arguments verify and decode the user
        const _id = user.id
    
        await User1.updateOne(
            { _id },
            {
                requirement: requirement,
                details: details
            }
        )
        res.json({ status: 'ok' })

    } catch (error) {
        res.json({ status: 'error', error: 'Error'})
    }
})


app.get('/filter1', (req, res) => {
    res.render('searchByPincode');
});

app.post('/api/search-ngo1', async (req, res) => {
    const { pincode } = req.body
    const user =  await User1.find({ pincode : pincode });
    console.log(user);
           //.lean() return only the simple JSON representation of the document 
    // console.log(data);
    //If pincode not found
    if (!user) {
        return res.json({ status: 'error', error: "No NGos in this pincode!"})
    }
    else{
        return res.json({ status: 'ok', user})
    }
    
})

app.get('/filter2', (req, res) => {
    res.render('searchByCity');
});

app.post('/api/search-ngo2', async (req, res) => {
    const { city } = req.body
    const user =  await User1.find({ city : city });
    console.log(user);
           //.lean() return only the simple JSON representation of the document 
    // console.log(data);
    //If pincode not found
    if (!user) {
        return res.json({ status: 'error', error: "No NGos in this city!"})
    }
    else{
        return res.json({ status: 'ok', user})
    }

})