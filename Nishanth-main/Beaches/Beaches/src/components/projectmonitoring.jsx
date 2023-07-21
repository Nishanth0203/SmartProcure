import React,{useEffect} from 'react'
import { useState } from 'react';
import SingleTable from './SingleTable';
import axios from '../context/axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Header from './Header';
import SidebarRight from './SidebarRight';
import Footer from './Footer';


function projectmonitoring() {
  return (
  <div>
    <div><Header/></div>
    <div><Navbar/></div>
    <div><Sidebar/></div>
    <div><SidebarRight/></div>
    <div><Footer/></div>
  </div>
  )
}

export default projectmonitoring