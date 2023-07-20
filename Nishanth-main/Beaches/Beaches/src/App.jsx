import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SidebarRight from './components/SidebarRight';


import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selections from './components/Selections';
import Carousel from './components/Carousel';
import Advantages from './components/Advantages';




const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <Footer />
      <SidebarRight />
    </>
  );
};

export default App;
