import React from 'react'
import CareerCard from './CareerCard'

function CareerList({careers, searchCriteria, AddFavorite,}) {
const filteredCareers = careers.filter(career => {
  const matchesEducation = !searchCriteria.educationLevel||
    career.educationLevel === searchCriteria.educationLevel;

  const matchCourse = !searchCriteria.Course ||
    career.category.toLowerCase().includes(searchCriteria.interest.toLowerCase())||
    career.requiredSkills.some(skill =>
      skill.toLowerCase().includes(searchCriteria.Course.toLowerCase())); 

  return (
    <div>CareerList</div>
  )
}

export default CareerList