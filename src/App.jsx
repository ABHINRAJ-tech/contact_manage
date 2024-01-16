import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login  from './Components/Login';
import SignUp  from './Components/SignUp'; // Path to your auth components
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import EditContact from './Components/EditContact';
const App = () => {
  return (
      <Router>
      <Routes>
      {<Route  path="/" element={<Home/>}/> }
        <Route exact path="/SignUp" element={<SignUp/>} />

       <Route exact path="/AddContact" element={<AddContact/>}/>

       <Route exact path="/ContactList" element={<ContactList/>}/>
      
       <Route exact path="/EditContact/:id" element={<EditContact/>}/>

       <Route exact path="/Login" element={<Login/>} />

      {/* Other parts of your application */}
    </Routes>
    </Router>
  );
};

export default App;



