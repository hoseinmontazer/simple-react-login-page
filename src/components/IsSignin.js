import React, { useState } from "react";
import apiClient from "./apiClient";

const IsSignin = (props) => {
   //call login method
   console.log("issssssss")
   const [ isLoggedIn, setisLoggedIn] = useState(true)
   let [authMode, setAuthMode] = useState("signin")
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const handleFirstnameChange = (e) => {
     setFirstname(e.target.value);
     };
 
   const handleLastnameChange = (e) => {
       setLastname(e.target.value);
     };
   const handleEmailChange = (e) => {
       setEmail(e.target.value);
     };
     const handlePasswordChange = (e) => {
       setPassword(e.target.value);
     };
     const handleSignup = (event) => {
       console.log(firstname,lastname,email, password);
       event.preventDefault();
     };
 
 
     const handleLogin = (event) => {
         async function makeRequest() {
           try {
             const res = apiClient.request({
               method: 'POST',
               url: `http://localhost:8000/api/token/`,
               headers: {
                 'Content-Type': 'application/json'},
               data: {
                 //username :"hosein",
                 password : password ,
                 email :email,
               },
             
             });
             
   
             const data = res.then((response) => response)
             const a = await data; 
             console.log("ggggggg",a)
             localStorage.setItem('AuthToken', a.data.access)
             localStorage.setItem('RefreshToken', a.data.refresh)
             if(a.status === 200){
              console.log("wwww");
               window.location = "/";
             }
           } catch (err) {
             if (err.response.status) {
               //return alert("Could not sign up")
               console.log(err.response.status)
               console.log("err.response.status")
   
             }
           }
         }
         
         makeRequest();
         event.preventDefault();
       };
   
   
       const changeAuthMode = () => {
         setAuthMode(authMode === "signin" ? "signup" : "signin")
       }
     
       if (authMode === "signin") {
         return (
           <div className="Auth-form-container">
             <form className="Auth-form">
               <div className="Auth-form-content">
                 <h3 className="Auth-form-title">Sign In</h3>
                 <div className="text-center">
                   Not registered yet?{" "}
                   <span className="link-primary" onClick={changeAuthMode}>
                     Sign Up
                   </span>
                 </div>
                 <div className="form-group mt-3">
                   <label>Email address</label>
                   <input
                     type="email"
                     className="form-control mt-1"
                     placeholder="Enter email"
                     value={email}
                     onChange={handleEmailChange}
                   />
                 </div>
                 <div className="form-group mt-3">
                   <label>Password</label>
                   <input
                     type="password"
                     className="form-control mt-1"
                     placeholder="Enter password"
                     value={password}
                     onChange={handlePasswordChange}
                   />
                 </div>
                 <div className="d-grid gap-2 mt-3">
                   <button type="submit" className="btn  btn-custom" onClick={handleLogin} >
                     Submit
                   </button>
                 </div>
                 <p className="text-center mt-2 ">
                   Forgot <a href="#">password?</a>
                 </p>
               </div>
             </form>
           </div>
         )
       }
     
       return (
         <div className="Auth-form-container">
           <form className="Auth-form">
             <div className="Auth-form-content">
               <h3 className="Auth-form-title">Sign In</h3>
               <div className="text-center">
                 Already registered?{" "}
                 <span className="link-primary " onClick={changeAuthMode}>
                   Sign In
                 </span>
               </div>
               <div className="form-group mt-3">
                 <label>First Name</label>
                 <input
                   type="text"
                   className="form-control mt-1"
                   placeholder="e.g Jane"
                   value={firstname}
                   onChange={handleFirstnameChange}
                 />
               </div>
               <div className="form-group mt-3">
                 <label>Last Name</label>
                 <input
                   type="text"
                   className="form-control mt-1"
                   placeholder="e.g  Doe"
                   value={lastname}
                   onChange={handleLastnameChange}
                 />
               </div>
               <div className="form-group mt-3">
                 <label>Email address</label>
                 <input
                   type="email"
                   className="form-control mt-1"
                   placeholder="Email Address"
                   value={email}
                   onChange={handleEmailChange}
                 />
               </div>
               <div className="form-group mt-3">
                 <label>Password</label>
                 <input
                   type="password"
                   className="form-control mt-1"
                   placeholder="Password"
                   value={password}
                   onChange={handlePasswordChange}
                 />
               </div>
               <div className="d-grid gap-2 mt-3">
                 <button type="submit" className="btn btn-primary btn-custom" onClick={handleSignup} >
                   Submit
                 </button>
               </div>
               <p className="text-center mt-2">
                 Forgot <a href="#">password?</a>
               </p>
             </div>
           </form>
         </div>
       )
     
    
}
export default IsSignin;