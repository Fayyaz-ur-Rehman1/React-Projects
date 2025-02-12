import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';
import uuid4 from "uuid4"

function App() {
  const localStorageKey = "Contact"
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))
      || []
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  }, [contact])

  const AddUser = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  }

  const removeContact = (id) => {
    const updateList = contact.filter((elm) => {
      return elm.id !== id
    })
    setContact(updateList)
  }

  return (
    <div className="App">
      <Header />
      <AddContact AddUser={AddUser} />
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;