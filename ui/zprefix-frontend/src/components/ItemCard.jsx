import React from 'react';

export default function ItemCard ({ item, clickHandler }) {


  return(
    <div className='item-card'>
      <h3 style={{color: 'white'}}>{item.item_name}</h3>
      <p className='item-description'>
        <strong>Inventory Manager ID: </strong> {item.user_id}<br />
        <strong>Quantity: </strong> {item.quantity}<br />
      </p>
      <img
        src = {item.img_url}
        alt={item.item_name}
        className='item-image'
        id = {item.item_id}
        onClick = {()=> clickHandler(event)}
      />
      <br />
    </div>
  )
}