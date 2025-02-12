import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


export default function ContactList(props) {
    const { contact, removeContact } = props
    const contactList = contact.map(val => {
        return (
            <div className='contacts'>
                <div className='name'>{val.data.Name}</div>
                <div className='email'> {val.data.Email}</div>
                <span onClick={() => removeContact(val.id)}><DeleteIcon /></span>
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
