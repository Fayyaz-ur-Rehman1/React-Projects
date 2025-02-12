import React, { useState } from 'react'
import "../App.css"

export default function AddContact({ AddUser }) {
    const [user, setUser] = useState({
        Name: "",
        Email: "",
    });

    const handelChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.Name === "" || user.Email === "") {
            alert("Please fill all the details")
            return
        }
        AddUser(user)
        setUser({ Name: "", Email: "" })
    };

    return (
        <div className='formHeader'>
            <div className='add-contact'>Add Contact</div>
            <form>
                <label>Name :</label><br />
                <input type="text"
                    name='Name'
                    placeholder='Enter Your Name'
                    value={user.Name}
                    onChange={handelChange}
                /> <br />

                <label>Email :</label><br />
                <input type="email"
                    name='Email'
                    className='email'
                    placeholder='Enter Your Email'
                    value={user.Email}
                    onChange={handelChange}
                /><br />
            </form>
            <button className='btn' onClick={handleSubmit}>Add Contact</button>
        </div>
    )
}