import { useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';

function App() {
  const [contact, setContact] = useState([]);
  const AddUser = (data) => {
    setContact([...contact, data]);
  }
  return (
    <div className="App">
      <Header />
      <AddContact AddUser={AddUser} />
      <ContactList contact={contact} />
    </div>
  );
}

export default App;