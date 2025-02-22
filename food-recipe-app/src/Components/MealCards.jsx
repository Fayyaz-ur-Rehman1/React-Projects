import React from 'react'
import { NavLink } from 'react-router-dom'

function MealCards({ detail }) {
    return (
        <div className='meals'>
            {!detail ? "Data Not Fount" : detail.map((elm) => {
                return (
                    <div className='mealImg'>
                        <img src={elm.strMealThumb} />
                        <p>{elm.strMeal}</p>
                        <NavLink to={elm.idMeal}>
                            <button>Recipe</button>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default MealCards