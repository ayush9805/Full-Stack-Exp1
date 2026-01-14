import React, { useState } from 'react';
import './FormStyles.css';

const SimpleForm = () => {
  // 1. Store input using state (Initial state as an object)
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 3. Display submitted data by setting it to a display state
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      
      {/* 1. Create form fields */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit">Submit Details</button>
      </form>

      {/* 3. Display submitted data */}
      {submittedData && (
        <div className="result-card">
          <h3>Submitted Information:</h3>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleForm;