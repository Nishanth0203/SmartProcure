import React from 'react';
import Sidebar from './Sidebar'; // Import your Sidebar component
import Homepage from './Homepage.css';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <Sidebar /> {/* Your Sidebar component */}
      <div style={{ flex: 1, marginLeft: '20px' }}>
        <h1>Welcome to SmartProcurement System</h1>
        <p>
          The SmartProcurement System enables the Tenderers to download the Tender Schedule free of cost and then
          submit the bids online through this 
        </p>
        <p>portal powered by Blockchain.</p>
        {/* Add more content here */}
      </div>
      {/* Add the tender search below the sidebar-right */}
    <div style={{ position: 'absolute', top: '300px', right: '20px', maxWidth: '250px', maxHeight: 'calc(100% - 280px)' }}>
        <div className="tender-search">
          <h2>Tender Search</h2>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <button>Go</button>
          </div>
          <p>Please search through reference ID</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;





