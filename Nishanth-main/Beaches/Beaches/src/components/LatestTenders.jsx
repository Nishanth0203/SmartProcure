import React, { useState, useEffect } from 'react';
import './LatestTenders.css';

const tenderData = [
  {
    title: 'Term contract for artificers works at residential Bldg at HQ',
    referenceNo: '8023/7/E8',
    closingDate: '27-Jul-2023 12:00 PM',
    bidOpeningDate: '28-Jul-2023 12:30 PM',
  },
  {
    title: 'Repairing and providing of AC accessories SM(E) Z5/NIT/23-24/20',
    closingDate: '01-Aug-2023 03:00 PM',
    bidOpeningDate: '02-Aug-2023 03:30 PM',
  },
  {
    title: 'Construction of a new office building',
    referenceNo: '9001/5/G5',
    closingDate: '15-Sep-2023 10:00 AM',
    bidOpeningDate: '16-Sep-2023 11:00 AM',
  },
  {
    title: 'Supply and installation of IT equipment',
    referenceNo: 'IT/2023/102',
    closingDate: '10-Oct-2023 04:00 PM',
    bidOpeningDate: '11-Oct-2023 10:30 AM',
  },
  // Add more sample data as needed
];

const LatestTenders = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % tenderData.length);
    }, 5000); // Change slide duration (in milliseconds) as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="latest-tenders">
      <h2>Latest Tenders</h2>
      <div className="tender-container">
        {tenderData.map((tender, idx) => (
          <div
            key={idx}
            className={`tender-column ${idx === index ? 'active' : ''}`}
          >
            <a href="#">
              <div className="tender-info">
                <p>{tender.title}</p>
                {tender.referenceNo && <p>Reference No: {tender.referenceNo}</p>}
                <p>Closing Date: {tender.closingDate}</p>
                <p>Bid Opening Date: {tender.bidOpeningDate}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <p className="more">Latest Tenders updates every 15 mins. More...</p>
    </div>
  );
};

export default LatestTenders;
