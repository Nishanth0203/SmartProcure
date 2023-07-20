// import React from 'react';

// const Footer = () => {
//   return (
    
//   );
// };

// export default Footer;

import React from 'react';
import './Footer.css'; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 SmartProcure. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </footer>
  );
}

