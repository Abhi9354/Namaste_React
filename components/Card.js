import React from 'react'

export const Card = (props) => {
    const{resData}=props;
    const {name,cuisines,avgRating}=resData;
    
  return (
    <div className='res-card'>
        <img className="res-img" alt="res-logo" src={'https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg'}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      
    </div>
  )
}
