import React from 'react'
import Avatar from '../assets/logo.png';
import "./header.css";

export default function Header() {
  return (
    <div className="main">
        <div className="head">
        <img className= "h-20 w-auto sm:h-20" style={{position:"fixed",left:"10px"}} src={Avatar} alt="avatar image"/>
        <div className="dis">

        <li style={{fontSize:"30px",paddingLeft:"82px"}}> 
        SmartProcure
        </li>
        <li style={{fontSize:"25px"}}>
        Blockchain powered Procurement portal
        </li>
        </div>
        </div>
    </div>

  )
}
