import React from 'react'
import { useState } from 'react';

function CareerForm({updateSearchCriteria}) {
  const [formData, setFormData] = useState({
    grade: '',
    educationLevel: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev)=>({...prev, [name]: value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearchCriteria(formData);
  };
  return (
    <div className="career-form">
      <form onSubmit={handleSubmit}>
        <h2>Find Your Career path</h2>
      <select name="grade" value={formData.grade} onChange={handleChange}>
        <option value="Grade">Select Grade</option>
        <option value="Title">Select Career</option>
        <option value="EducationLevel">Select EducationLevel</option>
      </select>
      <button type='submit'>Find Careers</button>
      </form>

    </div>
  

  )
}

export default CareerForm