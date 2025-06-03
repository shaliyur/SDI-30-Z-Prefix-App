/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {item_id: 1, user_id: 1, item_name: 'Book', description: 'A Game of Thrones (Song of Ice and Fire) Book 1 of 5 by George R. R. Martin', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/51RKP1hKi-L._SY445_SX342_PQ23_.jpg'},
    {item_id: 2, user_id: 1, item_name: 'Earbuds', description: 'JBL Vibe Beam - True Wireless JBL Deep Bass Sound Earbuds, Bluetooth 5.2, Water & Dust resistant, hands-free voice call', quantity: 10 , img_url: 'https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SX679_.jpg'},
    {item_id: 3, user_id: 1, item_name: 'Nespresso Pods', description: 'Nespresso Capsules Vertuo, Soleilo, Mild Roast Coffee, 30-count coffee pods, brews 7.8 oz', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/61rlgXrJJTL.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
    {item_id: 4, user_id: 1, item_name: 'T-shirt', description: 'Gildan Men"s Crew T-shirts, Multipack, Style G1100', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/81ItG4mkmHS._AC_SX679_.jpg'},
    {item_id: 5, user_id: 1, item_name: 'Lightbulbs', description: 'Sylvania ECO LED Light Bulb, A19 60W Equivalent, Efficient 9W, 7 year, 750 Lumens, 2700K, Non-Dimmable, Frosted, Soft White - 8 Count (Pack of 1)', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/81wKhRO66oL._AC_SX679_.jpg'},
    {item_id: 6, user_id: 1, item_name: 'Car Cabin Air Filter', description: 'EPAuto CP157 (CF12157) Cabin Air Filter, Replacement for Toyota Camry, Corolla, Rav4, Prius, Highlander, Sienna, Lexus RX, NX, ES, Subaru Outback, Crosstrek, Mazda CX-9', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/91H-gkIaASL._AC_SX679_.jpg'},
    {item_id: 7, user_id: 1, item_name: 'Portable Steamer', description: 'Steamer for Clothes Steamer, Fashion Portable Handheld Garment Steamer, 0.8 lbs Lightly, 15s Fast Heat-up, 10 minutes of continuous steam', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/51481loSecL.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
    {item_id: 8, user_id: 1, item_name: 'Brita Water Filters', description: 'Brita Standard Water Filter for Pitchers and Dispensers, BPA-Free, Reduces Copper, Cadmium and Mercury Impurities, Lasts Two Months, Includes 4 Filters', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/71+01-0BoPL._AC_SX679_.jpg'},
    {item_id: 9, user_id: 1, item_name: 'Apple Airtags', description: 'Apple AirTag 4-pack', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/91bsFWILPGS._AC_SX679_.jpg'},
    {item_id: 10, user_id: 1, item_name: 'Webcam', description: 'Logitech Brio 101 Full HD 1080p Webcam for Meetings, Streaming, Desktop, Laptop, PC-Built-in Mic, Shutter, USB-A, Teams, Zoom - Black', quantity: 10, img_url: 'https://m.media-amazon.com/images/I/71A0Pp767BL.__AC_SX300_SY300_QL70_FMwebp_.jpg'}
  ]);
};

  // return knex.schema.createTable('items', (table) => {
  //   table.increments('item_id');
  //   table.integer('user_id');
  //   table.foreign('user_id').references('user_id').inTable('users');
  //   table.string('item_name');
  //   table.string('description');
  //   table.integer('quantity');
  //   table.string('img_url')
  // })