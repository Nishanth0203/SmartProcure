import React, { useState } from 'react';
import './RFQsubmission.css';

const RFQSubmission = ({ tenderTitle, handleBackToTenders }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    publicAddress: '',
    phoneNumber: '',
    description: '',
    quantity: '',
    deliveryDate: '',
    paymentTerms: '',
    otherDetails: '',
    financialDocuments: null,
    technicalExperienceDocuments: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: files[0] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if all required fields are filled before submission
    if (
      formData.companyName &&
      formData.contactPerson &&
      formData.publicAddress &&
      formData.phoneNumber &&
      formData.description &&
      formData.quantity &&
      formData.deliveryDate &&
      formData.paymentTerms &&
      formData.otherDetails &&
      formData.financialDocuments &&
      formData.technicalExperienceDocuments
    ) {
      // Add your RFQ submission logic here
      // You can send the form data to the server or handle it as needed
      // For demonstration purposes, we'll just display an alert
      alert(`RFQ submitted for ${tenderTitle}`);
      setFormData({
        companyName: '',
        contactPerson: '',
        publicAddress: '',
        phoneNumber: '',
        description: '',
        quantity: '',
        deliveryDate: '',
        paymentTerms: '',
        otherDetails: '',
        financialDocuments: null,
        technicalExperienceDocuments: null,
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className={`rfq-submission-container ${formData.companyName || formData.contactPerson || formData.publicAddress || formData.phoneNumber || formData.description || formData.quantity || formData.deliveryDate || formData.paymentTerms || formData.otherDetails || formData.financialDocuments || formData.technicalExperienceDocuments ? 'active' : ''}`}>
      <h2>Submit RFQ for {tenderTitle}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPerson">Contact Person:</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="publicAddress">Public Address:</label>
          <input
            type="text"
            id="publicAddress"
            name="publicAddress"
            value={formData.publicAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]{10}" // Assuming a 10-digit phone number is required
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryDate">Delivery Date:</label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentTerms">Payment Terms:</label>
          <input
            type="text"
            id="paymentTerms"
            name="paymentTerms"
            value={formData.paymentTerms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="otherDetails">Other Details:</label>
          <textarea
            id="otherDetails"
            name="otherDetails"
            rows="4"
            value={formData.otherDetails}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="financialDocuments">Financial Documents:</label>
          <input
            type="file"
            id="financialDocuments"
            name="financialDocuments"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="technicalExperienceDocuments">Technical Experience Documents:</label>
          <input
            type="file"
            id="technicalExperienceDocuments"
            name="technicalExperienceDocuments"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit RFQ</button>
          <button type="button" className="show-more" onClick={handleBackToTenders}>Back to Tenders</button>
        </div>
      </form>
    </div>
  );
};

export default RFQSubmission;
