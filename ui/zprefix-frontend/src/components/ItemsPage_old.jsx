import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import React from 'react'
import ItemCard from './ItemCard'
//import './ItemsPage.css'

export default function ItemsPage() {
  const [items, setItems] = useState([])
  const [selectedItemId, setSelectedItemId] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/items')
    .then(res => res.json())
    .then(results => {
      setItems(results)
    })
    .catch(error => console.error('Error fetching items: ', error))
  }, [])

  function handleItemClick(event){
    setSelectedItemId(event.target.id)
    return(
      navigate('/items/')
    )
  }

  return(
    <div className = 'items-container'>
      <h1 className = 'items-list-h1'>INVENTORY LIST</h1>
      {items.length > 0 ? (
        <div className = 'items-list'>
          {items.map(item => (
            <ItemCard key = {item.item_id} item = {item} />
          ))}
        </div>
      ) : (
        <p>Loading Items...</p>
      )}
    </div>
  )
}