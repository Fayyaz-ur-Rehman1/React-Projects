import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


export default function ContactList({ contact }) {
    const contactList = contact.map(val => {
        return (
            <div className='contacts'>
                <div className='name'>{val.Name}</div>
                <div className='email'> {val.Email}</div>
                <span><DeleteIcon /></span>
            </div>
        )
    })
    return (
        <>
            <div className='ContactHeader'>contact list</div>
            <div>{contactList}</div>
        </>
    )
}
