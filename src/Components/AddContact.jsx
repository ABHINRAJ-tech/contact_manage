import React, { useState } from 'react';
import { db } from './utils/firebaseConfig'; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; 

const AddContact = () => {
  const navigate =useNavigate()
  const [name, setName] = useState('');
  const [number, setNumber ] = useState('');
    

  const addContact = async () => {
    
    const docRef = await addDoc(collection(db, "users"),{
        name,
        number,
      })
      .then(() => {
        // contact added successfully
        console.log('Contact added ');
        navigate("/ContactList")

        // Optionally, reset form fields
        setName('');
        setNumber('');
        
      
    }) 
    .catch ((error)=> {
      console.error('Error adding contact:', error);
    });
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type=" enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={addContact}>Add Contact</button>
    </div>
  );
};

export default AddContact;
