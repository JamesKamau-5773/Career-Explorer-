import React from 'react'
import CareerCard from './CareerCard'

function CareerList({careers, searchCriteria }) {
const filteredCareers = careers.filter(career => {
  const matchesEducationLevel= !searchCriteria.educationLevel||
    career.educationLevel === searchCriteria.educationLevel;

  const grades = !searchCriteria.grades ||
    career.grades.toLowerCase().includes(searchCriteria.interest.toLowerCase())||
     career.grades === searchCriteria.grades; 

  const career = !searchCriteria.courses ||
    career.courses.toLowerCase().includes(searchCriteria.courses.toLowerCase()) ||
    career.courses === searchCriteria.courses;   

    return matchesEducationLevel && grades && career;
  });
    
  return (
    <div className='career-list'>

      <h2>Career List</h2>
      {filteredCareers.length > 0 ? (
      filteredCareers.map((career) => (
        <div className='career-card' key={career.id}>
          <CareerCard/>
        </div>
      ))
      ) : (
        
        
        <p>No careers found matching your criteria.</p>
        
      )}
    
    </div>
  );
};


export default CareerList