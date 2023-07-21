import React from 'react';
import './LatestTenders.css';

const LatestTenders = () => {
  return (
    <div className="latest-tenders">
      <h2>Latest Tenders</h2>
      <div className="tender-container">
        {/* Sample Data 1 */}
        <div className="tender-column">
          <a href="#">
            <div className="tender-info">
              <p>Term contract for artificers works at residential Bldg at HQ</p>
              <p>Reference No: 8023/7/E8</p>
              <p>Closing Date: 27-Jul-2023 12:00 PM</p>
              <p>Bid Opening Date: 28-Jul-2023 12:30 PM</p>
            </div>
          </a>
        </div>

        {/* Sample Data 2 */}
        <div className="tender-column">
          <a href="#">
            <div className="tender-info">
              <p>Repairing and providing of AC accessories SM(E) Z5/NIT/23-24/20</p>
              <p>Closing Date: 01-Aug-2023 03:00 PM</p>
              <p>Bid Opening Date: 02-Aug-2023 03:30 PM</p>
            </div>
          </a>
        </div>
      </div>
      <p className="more">Latest Tenders updates every 15 mins. More...</p>
    </div>
  );
};

export default LatestTenders;

