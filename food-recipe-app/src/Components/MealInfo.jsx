import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function MealInfo() {
    const { mealid } = useParams();
    const [info, setInfo] = useState();
    const getInfoDishe = async () => {
        const getDisheDetail = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        setInfo(getDisheDetail.data.meals[0])
    }

    if (mealid !== "") {
        getInfoDishe()
    }

    return (
        <div>
            {!info ? "Data Not Fount" :
                <div className='mealInfo'>
                    <img src={info.strMealThumb} />
                    <div className="info">
                        <h1>Recipe Detail</h1>
                        <button>{info.strMeal}</button>
                        <h3>Instruction's</h3>
                        <p>{info.strInstructions}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default MealInfo