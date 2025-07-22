import React from 'react'

function CareerCard({career,onEdit,onDelete,addFavorite}) {
  const handleAddFavorite = (e) => {
   e.preventDefault()
    addFavorite(career.id);
  
  };
  const { id, title, description, salaryRange, requiredSkills,educationalLevel,requiredGrades } = career;
  return (
    <div className='Card'>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Salary Range: {salaryRange}</p>
      <p>Required Skills: {requiredSkills.join(', ')}</p>
      <p>Educational Level: {educationalLevel}</p>
      <p>Required Grades: {requiredGrades.join(', ')}</p>
      <div className='CardButtons'>
        <button onClick={() => onEdit(id)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={handleAddFavorite}>Add to Favorites</button>
         {isFavorite ? "❤️" : "♡"}
    </div>  
  )
}

export default CareerCard