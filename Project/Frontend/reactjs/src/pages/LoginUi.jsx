import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import user from "./../image/user.png";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

function LoginUi() {
  const navigate=useNavigate();
const handleUser=()=>{
  navigate("/BasicTable");
} 
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="Email" className="name" />
           </div>
           <div className="second-input">
             <img src={user} alt="user" className="email"/>
             <input type="name" placeholder="UserName" className="name"/>
           </div>
          <div className="login-button">
          <Button variant='contained' href="/MultipleSelect">Login</Button><br></br>
          <br></br><Button variant='contained' onClick={handleUser} href="/AddUser">Sign Up</Button>
          </div>
           
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}


export default LoginUi;