import React from 'react'

import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth();

  const logIn = (event) => {
    event.preventDefault();

    let user_creds = {
      username : document.getElementById('username').value,
      password : document.getElementById('password').value
    }

    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user_creds)
    })
    .then(response => {
      if (response === 'Could not find user ') {
        alert('Could not find user')
        return [{
          user_id: -1,
          first_name: '',
          last_name: '',
          username: 'visitor',
          password: ''
        }]
      } else {
        return response.json()
      }
    })
    .then(new_user => {
      setAuthUser(new_user[0])
      setIsLoggedIn(true);
      console.log(new_user[0])
    })
    .catch(response => console.log(response))

  }

  const logOut = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    setAuthUser({
      user_id: -1,
      first_name: '',
      last_name: '',
      username: 'visitor',
      password: ''
    })
  }

  return (
    <div>
      <span>User is currently: {isLoggedIn ? 'Logged-In' : 'Logged Out'}.</span>
      {isLoggedIn ? (<span>Username: {authUser.username}</span>) : null}
      <br />
      <br />

      {isLoggedIn ? <button onClick = {(event)=>{logOut(event)}}>Log Out</button> :
      <>
        <input type = 'text' id = 'username' placeholder = 'Enter your username'/>
        <br />
        <input type = 'text' id = 'password' placeholder = 'Enter your password'/>
        <br />
        <button onClick = {(event)=>{logIn(event)}}>Log In</button>
      </>
      }

    </div>
  )
}