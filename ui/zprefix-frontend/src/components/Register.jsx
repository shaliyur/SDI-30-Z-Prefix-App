import React from 'react'
import {useState, useEffect, createContext} from 'react';

import { useAuth } from '../contexts/AuthContext'

export default function Register() {
  const [newUser, setNewUser] = useState({});

  const addUserOnClick = (event) => {
    event.preventDefault();
    const user_obj = {
      first_name: document.getElementById('new_first').value,
      last_name: document.getElementById('new_last').value,
      username: document.getElementById('new_user').value,
      password: document.getElementById('new_password').value
    }

    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user_obj)
    })
    .then(response => response.json())
    .then(data => setNewUser(data))
    .then(() => {
      alert('New user has been added! Navigate to "http://localhost:5173/login" to log in!')
      document.getElementById('new_first').value = '';
      document.getElementById('new_last').value = '';
      document.getElementById('new_user').value = '';
      password: document.getElementById('new_password').value = ''
    })
  }

  return(
    <div>
      <h1> Register For Sean's Inventory Management System! </h1>
      <input type = 'text' id = 'new_first' placeholder = 'Enter your first name here'/>
      <br />
      <input type = 'text' id = 'new_last' placeholder = 'Enter your last name here' />
      <br />
      <input type = 'text' id = 'new_user' placeholder = 'Enter your username here'/>
      <br />
      <input type = 'text' id = 'new_password' placeholder = 'Enter your password here'/>
      <br />
      <button onClick = {addUserOnClick}>Register</button>
    </div>
  )
}

//users table column names:
    // table.increments('user_id');
    // table.string('first_name');
    // table.string('last_name');
    // table.string('username');
    // table.string('password');