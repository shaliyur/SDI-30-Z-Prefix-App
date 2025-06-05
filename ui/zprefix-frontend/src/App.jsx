import { useState, useEffect, createContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import './App.css'

//import contexts:
import {AuthProvider} from './contexts/AuthContext'

//import components
import ItemsPage from './components/ItemsPage';
import ItemDetails from './components/ItemDetails';
import Login from './components/Login'
import Register from './components/Register'
import MyInventoryPage from './components/MyInventoryPage'
import MyItemPage from './components/MyItemPage'

function App() {
  const [items, setItems] = useState([])
  const [selectedItemId, setSelectedItemId] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedItemId !== ''){
      fetch(`http://localhost:8080/items/${selectedItemId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSelectedItem(data)
      })
    }
    else{
      fetch('http://localhost:8080/items')
      .then(res => res.json())
      .then(results => {
        setItems(results)
      })
      .catch(error => console.error('Error fetching items: ', error))
    }
  }, [selectedItemId])

  function handleItemClick(event){
    setSelectedItemId(event.target.id)
    console.log(selectedItemId)
    return(
      navigate(`/items/${selectedItem[0].item_id.toString()}`)
    )
  }

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path = '/login' element = {<Login />}/>
          <Route path = '/register' element = {<Register />}/>
          <Route path = '/my_inventory' element = {<MyInventoryPage />}/>
          <Route path = '/my_item/:id' element = {<MyItemPage />}/>
          <Route path = '/inventory' element={<ItemsPage key={"Itemspage"} itemData = {items} clickHandler={handleItemClick}/>}/>
          <Route path = '/items/:id' element = {<ItemDetails key = {selectedItem.item_name + ' Details Page'} item = {selectedItem}/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
};

export default App;



//default vite page:
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
