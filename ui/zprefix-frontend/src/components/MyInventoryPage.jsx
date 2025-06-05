import React from 'react'
import {useState, useEffect, createContext} from 'react';

import { useAuth } from '../contexts/AuthContext'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'

import MyItemCard from './MyItemCard'

export default function MyInventoryPage(){
  const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth();
  const navigate = useNavigate();
  const [myInventory, setMyInventory] = useState([]);
  const [myItem, setMyItem] = useState({});
  const [myItemId, setMyItemId] = useState('')

  function handleItemClick(event){
    setMyItemId(event.target.id)
    return(
      navigate(`/my_item/${myItem[0].item_id.toString()}`, {state: myItem} )
    )
  }

  function addItem(event){
    event.preventDefault();
    let new_item = {
      user_id: authUser.user_id,
      item_name: document.getElementById('add_item_name').value,
      description: document.getElementById('add_description').value,
      quantity: document.getElementById('add_quantity').value,
      img_url: document.getElementById('add_image').value
    }

    console.log(new_item)

    fetch('http://localhost:8080/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(new_item)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => {alert('Your item has been added!')})
    .then(() => {
      fetch(`http://localhost:8080/items?user_id=${authUser.user_id}`)
        .then(res => res.json())
        .then(results => {
          setMyInventory(results)
        })
        .catch(error => console.error('Error fetching items: ', error))
    })
  }


  if (isLoggedIn){

    useEffect(() => {
      if (myItemId !== ''){
        fetch(`http://localhost:8080/items/${myItemId}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setMyItem(data)
        })
      }
      else{
        console.log(authUser.user_id)
        fetch(`http://localhost:8080/items?user_id=${authUser.user_id}`)
        .then(res => res.json())
        .then(results => {
          setMyInventory(results)
        })
        .catch(error => console.error('Error fetching items: ', error))
      }
    }, [myItemId])


  }

  return(
    <div>
      {isLoggedIn ?
        <>
          <h1> Welcome {authUser.username}! This is your current inventory! </h1>
          {myInventory.length > 0 ? (
            <>
              <div className = 'my-items-list'>
                {myInventory.map(item => (
                  <MyItemCard key={item.item_id} item = {item} clickHandler = {handleItemClick}/>
                ))}
              </div>
              <label>
                Item Name: <input id = 'add_item_name' type = 'text' placeholder = 'Enter your new item"s name here'/>
                Quantity: <input id = 'add_quantity' type = 'number' placeholder = 'Enter the quantity available'/>
                Description: <input id = 'add_description' type = 'text' placeholder = 'Enter a brief description here'/>
                Image: <input id = 'add_image' type = 'text' placeholder = 'Enter an image URL here'/>
              </label>
              <button onClick = {addItem}>Add Item!</button>
            </>
            ) : (
              <>
                <p> You Currently Don't Have Any Items! </p>
                <label>
                  Item Name: <input id = 'add_item_name' type = 'text' placeholder = 'Enter your new item"s name here'/>
                  Quantity: <input id = 'add_quantity' type = 'number' placeholder = 'Enter the quantity available'/>
                  Description: <input id = 'add_description' type = 'text' placeholder = 'Enter a brief description here'/>
                  Image: <input id = 'add_image' type = 'text' placeholder = 'Enter an image URL here'/>
                </label>
                <button onClick = {addItem}>Add Item!</button>
              </>
            )
          }
        </>
        :
        <>
          <h1> Insufficient User Privileges </h1>
          {alert('You are not logged in, and will now be re-directed to the main inventory page')}
          {navigate('/inventory')}
        </>
      }

    </div>
  )
}