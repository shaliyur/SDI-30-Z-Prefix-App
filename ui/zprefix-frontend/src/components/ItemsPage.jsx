import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import React from 'react'
import ItemCard from './ItemCard'
//import './ItemsPage.css'

export default function ItemsPage({itemData, clickHandler}) {

  return(
    <div className = 'items-container'>
      <h1 className = 'items-list-h1'>INVENTORY LIST</h1>
      {itemData.length > 0 ? (
        <div className = 'items-list'>
          {itemData.map(item => (
            <ItemCard key = {item.item_id} item = {item} clickHandler = {clickHandler}/>
          ))}
        </div>
      ) : (
        <p>Loading Items...</p>
      )}
    </div>
  )
}