import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">MIS Reports</a>
        </li>
        <li>
          <a href="#">Tenders by Location</a>
        </li>
        <li>
          <a href="#">Tenders by Organisation</a>
        </li>
        <li>
          <a href="#">Tenders by Classification</a>
        </li>
        <li>
          <a href="#">Tenders in Archive</a>
        </li>
        <li>
          <a href="#">Tenders Status</a>
        </li>
        <li>
          <a href="#">Cancelled/Retendered</a>
        </li>
        <li>
          <a href="#">Debarment List</a>
        </li>
        <li>
          <a href="#">Announcements</a>
        </li>
        <li>
          <a href="#">Recognitions</a>
        </li>
        {/* Add the buttons class to the desired links */}
        <li>
          <a href="#" className="button">Click here to login</a>
        </li>
        <li>
          <a href="#" className="button">Generate/Forgot password?</a>
        </li>
        <li>
          <a href="#" className="button">Find my Nodal Officer</a>
        </li>
      </ul>
    </div>
  );
}
