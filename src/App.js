//import logo from './logo.svg';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css'

import Navbar from './Navbar';

import Home from './Home';
import SignUp from './SignUpD';
import SignUpN from './SignUpN';
import SignInD from './SignInD';
import SignInN from './SignInN';
import SignUpT from './SignUpT';
import Req from './Req';
import Filter from './Filter';
import Filter2 from './Filter2';
import PasswordN from './PasswordN';
import PasswordD from './PasswordD';
import AboutUs from './AboutUs';
function App() {
  const title= "Hello Donars"
  return (
    <Router>
   <div className="App">
   <Navbar/>
     <hr/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/SignUpD">
         <SignUp/>
       </Route>
       <Route path="/SignUpN">
         <SignUpN/>
       </Route>
       <Route path="/SignInD">
         <SignInD/>
       </Route>
       <Route path="/SignInN">
         <SignInN/>
       </Route>
       <Route path="/req">
         <Req/>
       </Route>
       <Route path="/filter">
         <Filter/>
       </Route>
       <Route path="/filter2">
         <Filter2/>
       </Route>
       <Route path="/PasswordD">
         <PasswordD/>
       </Route>
       <Route path="/PasswordN">
         <PasswordN/>
       </Route>
       <Route path="/aboutus">
         <AboutUs/>
       </Route>
     </Switch>
     
   </div>
   </Router>
     
  );
}

export default App;
