import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HomePage from './components/Homepage';
import LatestTenders from './components/LatestTenders';
import Buttons from './components/Buttons';
import ButtonBox from './components/ButtonsBox';
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
      <HomePage />
      <LatestTenders />
      <ButtonBox />
      <Buttons />
      <Sidebar />
      <Footer />
      <SidebarRight />
    </>
  );
};

export default App;
