// CreateNew.jsx
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import './CreateNew.css'; // Import the CSS file for CreateNew

const CreateNew = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="main-content">
        <h2>Create New Project</h2>
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input type="text" id="projectName" name="projectName" placeholder="Enter project name" />
          </div>
          <div className="form-group">
            <label htmlFor="referenceNo">Reference No:</label>
            <input type="text" id="referenceNo" name="referenceNo" placeholder="Enter reference number" />
          </div>
          <div className="form-group">
            <label htmlFor="closingDate">Closing Date:</label>
            <input type="date" id="closingDate" name="closingDate" />
            <input type="time" id="closingTime" name="closingTime" />
          </div>
          <div className="form-group">
            <label htmlFor="bidOpeningDate">Bid Opening Date:</label>
            <input type="date" id="bidOpeningDate" name="bidOpeningDate" />
            <input type="time" id="bidOpeningTime" name="bidOpeningTime" />
          </div>
          {/* Add more form fields as needed */}
          <div className="form-group">
            <label htmlFor="projectDescription">Project Description:</label>
            <textarea id="projectDescription" name="projectDescription" rows="4" placeholder="Enter project description"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="projectCID">Project CID (IPFS):</label>
            <input type="text" id="projectCID" name="projectCID" placeholder="Enter project CID" />
          </div>
          <div className="form-group">
            <button type="submit">Create Tender</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNew;


