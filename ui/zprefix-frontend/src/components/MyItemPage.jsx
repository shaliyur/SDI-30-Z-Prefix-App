import React from 'react';
import {useState, useEffect, createContext} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function MyItemPage () {
  const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth();
  const [editItemFlag, setEditItemFlag] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;
  console.log(Array.isArray(item))

  function deleteItem() {
     fetch(`http://localhost:8080/items/${item[0].item_id}`, {
      method: 'DELETE',
     })
    .then(data => console.log(data))
    .then(() => {
      alert(`Item ${item[0].item_id} has been deleted, navigating you back to your inventory`);
      navigate('/my_inventory')
    })

  }

  function editItem(){
    const edited_item = {
      item_id: item[0].item_id,
      user_id: item[0].user_id,
      item_name: document.getElementById('edit_name').value,
      description: document.getElementById('edit_description').value,
      quantity: document.getElementById('edit_quantity').value,
      img_url: document.getElementById('edit_image').value
    }

    fetch(`http://localhost:8080/items/${item[0].item_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(edited_item)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => {
      alert('Your item has been edited! You will now return to your inventory page');
      setEditItemFlag(false);
    })
    .then(() => {navigate('/my_inventory')})
  }

  return(
    <div className='item-card'>
      <h1>Inventory Details Page For: <br /></h1>
      <h3 style={{color: 'white'}}>{item[0].item_name}</h3>
      <p className='item-description'>
        <strong>Item ID: </strong> {item[0].item_id} <br />
        <strong>Inventory Manager ID: </strong> {item[0].user_id}<br />
        <strong>Quantity: </strong> {item[0].quantity}<br />
        <strong>Description: </strong> {item[0].description}<br />
      </p>
      <img
        src = {item[0].img_url}
        alt={item[0].item_name}
        className='item-image'
        id = {item[0].item_id}
      />
      <br />

      <button onClick = {deleteItem}>Delete Item</button>
      <br />
      {editItemFlag ? (
        <div>
          Item Name: <input type='text' id = 'edit_name' placeholder = 'Enter new name'/>
          Quantity: <input type='number' id = 'edit_quantity' placeholder = 'Enter new quantity'/>
          Description: <input type = 'text' id = 'edit_description' placeholder = 'Enter new description'/>
          Image: <input type = 'text' id = 'edit_image' placeholder = 'Enter new image'/>
          <button onClick = {editItem}>Submit Changes</button>
        </div>
      ) : (
        <button onClick = {() => {setEditItemFlag(true)}}>Edit Item</button>
      )}

    </div>
  )
}