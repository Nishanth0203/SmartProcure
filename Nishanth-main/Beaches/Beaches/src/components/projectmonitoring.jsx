import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import './projectmonitoring.css'; // Import the CSS file for ProjectMonitoring

const ProjectMonitoring = () => {
  // Sample data for the table
  const projects = [
    {
      tenderName: 'Construction of New Office Building',
      tenderStartDate: '2023-07-20',
      awardedBidder: 'ABC Contractors',
      bidderAddress: '0x5a8b...d90f',
      projectCost: '1000000',
      projectStatus: 'In Progress',
    },
    {
      tenderName: 'Road Construction Project',
      tenderStartDate: '2023-08-05',
      awardedBidder: 'XYZ Builders',
      bidderAddress: '0x8e9f...c29a',
      projectCost: '1500000',
      projectStatus: 'Completed',
    },
    {
      tenderName: 'Bridge Renovation Project',
      tenderStartDate: '2023-09-12',
      awardedBidder: 'PQR Infra',
      bidderAddress: '0x4bdf...8bfc',
      projectCost: '800000',
      projectStatus: 'In Progress',
    },
    {
      tenderName: 'School Building Construction',
      tenderStartDate: '2023-10-01',
      awardedBidder: 'LMN Builders',
      bidderAddress: '0x1d2a...5bca',
      projectCost: '1200000',
      projectStatus: 'On Hold',
    },
    {
      tenderName: 'Hospital Renovation Project',
      tenderStartDate: '2023-10-20',
      awardedBidder: 'JKL Constructions',
      bidderAddress: '0x7a6c...fbd3',
      projectCost: '900000',
      projectStatus: 'In Progress',
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <h2 className='project'>Project Monitoring</h2>
      <div className="main-content">
        <div className="table-container">
          <table className="project-table">
            <thead>
              <tr>
                <th>Tender Name</th>
                <th>Tender Start Date</th>
                <th>Awarded Bidder</th>
                <th>Bidder Address (Public)</th>
                <th>Project Cost</th>
                <th>Project Status</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>
                    <a href={`/${project.tenderName}`}>{project.tenderName}</a>
                  </td>
                  <td>{project.tenderStartDate}</td>
                  <td>{project.awardedBidder}</td>
                  <td>
                    <a href={`/${project.bidderAddress}`}>{project.bidderAddress}</a>
                  </td>
                  <td>${project.projectCost}</td>
                  <td>{project.projectStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectMonitoring;
