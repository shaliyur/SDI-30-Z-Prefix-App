const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt');

const app = express();

const port = 8080;
const knex = require('knex')(require('./knexfile.js')["development"]);

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).send('Your knex and express application is running successfully!')
});

app.get('/items', (request, response) => {
  knex('items')
  .select('*')
  .then(items => {
    var itemData = items.map(item => {
      return {
        item_id: item.item_id,
        user_id: item.user_id,
        quantity: item.quantity,
        item_name: item.item_name,
        img_url: item.img_url
      }
    })

    return itemData
  })
  .then(results => response.status(200).json(results))
  .catch(err => {
    console.log(err)
    res.status(404).json({
      message: 'Error with retrieving item data'
    })
  })
})

app.get('/items/:item_id', (request, response) => {
  const {item_id} = request.params;

  knex.select()
  .from('items')
  .where({item_id: item_id})
  .then(data => response.status(200).json(data))
  .catch(err => {
    res.status(404).json({
      message: 'item not found'
    })
  })
});

///////////////////////////////////////Endpoints for users table/////////////////////////////////////////////////////////////

async function getMaxUserID(){
  return knex('users').max('user_id').first();
}

app.get('/users', (request, response) => {
  knex('users')
  .select('*')
  .then(users => {
    var userData = users.map(users => users)
    response.json(userData)
  })
})

app.post('/users', async (req, res) => {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  const {first_name, last_name, username} = req.body;
  const user_id = await getMaxUserID();
  const new_user = {
    user_id: ++user_id.max,
    first_name: first_name,
    last_name: last_name,
    username: username,
    password: hashedPassword
  }

  knex('users')
  .insert(new_user)
  .then(x => res.status(200).json(new_user))
  .catch(err => res.status(500).send(err))
  })


app.post('/users/login', async (req, res) => {
  const {username, password} = req.body;

  knex.select()
  .from('users')
  .where({username: username})
  .then(user => {
    bcrypt.compare(password, user[0].password, (err, result) => {
      if (err) {
        console.error('Error comparing passwords: ', err);
        res.status(500).send('error comparing passwords');
      }

      if (result) {
        console.log('Passwords match! user authenticated!');
        res.status(200).send(user);
      } else {
        res.status(200).send('Incorrect password!');
      }
    })
  })
  .catch(err => {
    //console.log(err);
    res.status(500).send('Could not find user ', err)
  })
})


app.listen(port, () => {
  console.log('Your Knex and Express Application is running successfully!')
})

//users table column names:
    // table.increments('user_id');
    // table.string('first_name');
    // table.string('last_name');
    // table.string('username');
    // table.string('password');

  // return knex.schema.createTable('items', (table) => {
  //   table.increments('item_id');
  //   table.integer('user_id');
  //   table.foreign('user_id').references('user_id').inTable('users');
  //   table.string('item_name');
  //   table.string('description');
  //   table.integer('quantity');
  //   table.string('img_url')
  // })