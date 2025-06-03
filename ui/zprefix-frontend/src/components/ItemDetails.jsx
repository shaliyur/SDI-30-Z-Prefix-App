import React from 'react';

export default function ItemDetails ({ item }) {

  console.log(Array.isArray(item))

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
    </div>
  )
}

 // return knex.schema.createTable('items', (table) => {
  //   table.increments('item_id');
  //   table.integer('user_id');
  //   table.foreign('user_id').references('user_id').inTable('users');
  //   table.string('item_name');
  //   table.string('description');
  //   table.integer('quantity');
  //   table.string('img_url')
  // })