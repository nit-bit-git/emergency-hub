import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    Caption: "",
    Type: "",
    Date:"",
    Severity:"",
    Description: ""
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };
  const handleDateInputClick = () => {
    setIsCalendarOpen(true);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic or API request here
    console.log(formData);
    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Caption:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div>
      <label>Date:</label>

      {isCalendarOpen && (
        <Calendar value={formData.selectedDate} onChange={handleDateChange} />)}
      </div>
    
      <div>
      <label>Severity</label>
        <select
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="option1">low</option>
          <option value="option2">medium</option>
          <option value="option3">high</option>
        </select>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;