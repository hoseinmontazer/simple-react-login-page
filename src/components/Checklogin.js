import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import jwt_decode from "jwt-decode";
import IsSignin from "./IsSignin";
import Home from "./Home";






const Checklogin = (props) => {

  const [ isLoggedIn, setisLoggedIn] = useState(true)

  function Islogin(props) {
      //console.log("token is:")
      const AuthToken = localStorage.getItem("AuthToken");

      if (AuthToken){
        const currentDate = new Date();
        console.log(AuthToken);
        var decodedToken = jwt_decode(AuthToken);
        const b =  decodedToken;
        //console.log("token is:" , decodedToken.exp * 1000)
        console.log("token iss:",b)
        if (decodedToken.exp * 1000 > currentDate.getTime()) {
          console.log("Token is valid.");
          //window.location = "/";
          return <Home isLoggedIn={true} />
        }
        else {
          console.log("Token is Expired.");
          window.location = "/sigin";


        }
      } else {
        console.log("hhhhhhhh");
        window.location = "/sigin";
      }
      

      }


      function Login(props) {
            const isLoggedIn = props.isLoggedIn;
            console.log("hiiiiiii",isLoggedIn)
            
            if (isLoggedIn) {
              return <Islogin />;
            }
            return <IsSignin />;

          }
        const root = ReactDOM.createRoot(document.getElementById('root')); 
        // Try changing to isLoggedIn={true}:
        root.render(<Login isLoggedIn={true} />);
  
    }
  
  export default Checklogin;

  