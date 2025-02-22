import React, { useState } from 'react'
import axios from 'axios'
import MealCards from './MealCards';

function MainPage() {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handelChange = (e) => {
        setSearch(e.target.value)
    }

    async function getApi() {
        if (search == "") {
            setMsg("Please Enter Sometings")
        } else {
            const getDishe = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            setData(getDishe.data.meals)
            setMsg("");
        }

    }

    return (
        <>
            <div className='container'>
                <h1 className='head'>FOOD RECIPE APP</h1>
                <div className='searchBar'>
                    <input type="text" placeholder='Enter Dishe' onChange={handelChange} />
                    <button onClick={getApi}>Search</button>
                </div>
                <h2>{msg}</h2>
                <div>
                    <MealCards detail={data} />
                </div>
            </div>
        </>
    )
}

export default MainPage