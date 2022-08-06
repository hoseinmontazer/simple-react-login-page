import React from 'react';
import Navbar from './navbar';


export default function Home(props) {
  const c =  props.isLoggedIn;
  console.log("hiiiiiiii",c);
  if  (c === true) {
    return (
      <div>
          < Navbar />
          <h2>Manatee</h2>

      </div>

    )
  }
  else {
    window.location = "/auth";
  }
}