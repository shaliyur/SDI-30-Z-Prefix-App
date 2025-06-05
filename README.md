# SDI-30-Z-Prefix-App

Welcome to Sean's Inventory Management System!

Setting the application up:

This application relies on docker to containerize the database referenced in this application, and node.js, express, bcrypt, postgres, and knex for the backend, as well as javascript react and vite for the front end

In order to run the application after cloning and forking from the github repository, do the following

1) Navigate to the api folder and run 'npm install' to install all of the necessary libraries
2) Pull the latest image of postgres from docker and connect as the user postgres by running the following:
  a) 'docker pull postgres'
  b) run a docker container for the latest postgres image and set the password using the environment tag to 'docker'
  c) connect to the container as the User postgres in an integrated terminal
  d) create a database titled 'zprefix'
  e) reference the knexfile.js in the api folder for the development variables
3) navigate back to the api folder and run
  a) npx knex migrate:latest
  b) npx knex seed:run
4) start the express server using the following:
  a) npm start
  b) after doing this, you should see the following in your terminal: 'Your Knex and Express Application is running successfully!'
5) start the front end by navigating to the ui folder and running the following commands:
  a) npm install
  b) npm run dev

  This digital inventory application is designed to help inventory managers keep track of their current inventories and features all CRUD capabilities to Create, Read, Update, and Delete inventory entries

  additionally, it allows visitors to see all current inventory items from all inventory managers

  The following user stories have been implemented and this file will help the user navigate each user story successfully:

  1) As an inventory manager I want to be able to create an account so that I can track my inventory.

  Implementation:
    a) Navigate to http://localhost:5173/register
    b) Enter your user details and click register
    c) You will be re-directed to the login page to login using these credentials

  2) As an inventory manager I want to be able to log into my account so that I can see my inventory of items. After logging in, the inventory manager should be redirected to their inventory of items.

  Implementation:
    a) Navigate to http://localhost:5173/login
    b) Type in your login credentials and click log in
    c) once the user credentials are authenticated, you will be re-directed to your inventory
    d) You can add an item by entering your item's details and clicking the add item button

  3) As an inventory manager I want to be able to create a new item so that I can share my item details with the world. After the item is created, the inventory manager should be redirected to their inventory of items. An item displays name, description, and quantity.

  Implementation:
   a)Log in by navigating to  http://localhost:5173/login, where you will be re-directed to your inventory page
   b) Enter your item details and click add item
   c) Your inventory page will update and allow you to add any additional items

  4) As an inventory manager I want to be able to see a my entire inventory of items.

  Implementation:
   a)Log in by navigating to  http://localhost:5173/login, where you will be re-directed to your inventory page

   5) As an inventory manager I want to be able to see any individual item I have added.

  Implementation:
   a)Log in by navigating to  http://localhost:5173/login, where you will be re-directed to your inventory page
   b) click on the image of an item for which you would like to view the details
   c) you will be re-directed to that item's details page

   6) As an inventory manager I want to be able to edit an item so that I can fix any mistakes I made creating it.

  Implementation:
   a)Log in by navigating to  http://localhost:5173/login, where you will be re-directed to your inventory page
   b) click on the image of an item for which you would like to view the details
   c) you will be re-directed to that item's details page
   d) Click the edit item page
   e) enter all information and hit submit
   f) you will be re-directed to your inventory page where you will see the edited item

   7) As an inventory manager I want to be able to delete an item so that I can remove any unwanted content.

  Implementation:
  a)Log in by navigating to  http://localhost:5173/login, where you will be re-directed to your inventory page
   b) click on the image of an item for which you would like to delete
   c) you will be re-directed to that item's details page
   d) click the delete button
   e) you will be re-directed to your inventory page

  8) As a visitor, who is not logged in, I want to be able to view all items created by every inventory manager so that I can browse every item.

  Implementation:
    a) navigate to http://localhost:5173/login and click the login as visitor button
    b) you will be re-directed to the main inventory page where you can view all items created by every inventory manager

  9) As a visitor, who is not logged in, I want to be able to view a specific item created by any user so that I can see all of its details

  Implementation:
    a) navigate to http://localhost:5173/login and click the login as visitor button
    b) you will be re-directed to the main inventory page where you can view all items created by every inventory manager
    c) double click on the item that you would like to view in greater detail
    d) all of the item's information is available to the visitor, however a visitor is unable to edit or delete an item from the inventory system

  10) As an inventory manager I want to be able to view all items created by every inventory manager so that I can browse every item.

    Implementation:
    a) navigate to http://localhost:5173/inventory
    b) This is the main inventory page where you can view all items created by every inventory manager
    c) double click on the item that you would like to view in greater detail












