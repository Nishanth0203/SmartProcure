import React,{useEffect} from 'react'
import { useState } from 'react';
import SingleTable from './SingleTable'
import axios from '../context/axios'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import Header from './Header';
import SidebarRight from './SidebarRight';
import Footer from './Footer';

const Tables = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    async function getData(){
      try{
        const res = await axios.get('/getData')
        setData(res.data)
        console.log("result from fetching of data : ",res.data);
      }catch(error){
        console.log("error in getting data")
      }
    }
    getData()


  }, []);
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

export default Tables