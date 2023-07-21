import React from 'react'
import Avatar from '../assets/logo.png';
import Avatarr from '../assets/contractor.jpg';
import "./header.css";

export default function Header() {
  return (
    <div className="main">
        <div className="head">
        <img className= "h-20 w-auto sm:h-20" style={{position:"fixed",left:"10px"}} src={Avatar} alt="avatar image"/>
        <img className= "h-20 w-auto sm:h-20" style={{position:"fixed",left:"1600px"}} src={Avatarr} alt="avatarr image"/>
        <div className="dis">

        <li style={{fontSize:"50px",paddingLeft:"82px"}}> 
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
