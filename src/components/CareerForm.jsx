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
  

      </form>

    </div>
  

  )
}

export default CareerForm