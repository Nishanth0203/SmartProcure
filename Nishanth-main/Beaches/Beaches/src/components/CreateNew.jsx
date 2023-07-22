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
        <div className="field">
          <label htmlFor="projectName">Project Name:</label>
          <input type="text" id="projectName" name="projectName" placeholder="Enter project name" value="Construction of a new office building" />
        </div>
        <div className="field">
          <label htmlFor="referenceNo">Reference No:</label>
          <input type="text" id="referenceNo" name="referenceNo" placeholder="Enter reference number" value="9001/5/G5" />
        </div>
        <div className="field">
          <label htmlFor="closingDate">Closing Date:</label>
          <input type="date" id="closingDate" name="closingDate" value="2023-07-27" />
          <input type="time" id="closingTime" name="closingTime" value="12:00" />
        </div>
        <div className="field">
          <label htmlFor="bidOpeningDate">Bid Opening Date:</label>
          <input type="date" id="bidOpeningDate" name="bidOpeningDate" value="2023-07-28" />
          <input type="time" id="bidOpeningTime" name="bidOpeningTime" value="12:30" />
        </div>
        {/* Add more form fields as needed */}
        <div className="field">
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea id="projectDescription" name="projectDescription" rows="4" placeholder="Enter project description">
          The project involves the construction of a new office building with modern facilities and amenities to accommodate the growing workforce. The building will have multiple floors, meeting rooms, open workspaces, and a cafeteria. The construction will adhere to sustainable building practices and high-quality standards to ensure a comfortable and productive work environment.
          </textarea>
        </div>
        <div className="field">
          <label htmlFor="projectCID">Project CID (IPFS):</label>
          <input type="text" id="projectCID" name="projectCID" placeholder="Enter project CID" value="QmUK7ugPv2npK2hHfxt4SCkrKzxZFh3CiwxuBTFs73hRsu" />
        </div>
        <div className="field">
          <button type="submit">Create Tender</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNew;




