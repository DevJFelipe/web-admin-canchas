import React from "react";
import logo from "../assets/img/playground-logo.png";



const Logo = () => {
  return (
    <>
    <img 

    src={logo} 
    alt="Logo" 
    width="80" 
    height="80"
  />
    <p className="font-bold text-inherit font-platypi mr-20">PlayGround</p>
  </>
  )
}

export default Logo