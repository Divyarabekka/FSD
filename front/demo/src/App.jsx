import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Base from './Base/Base'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddNotes from './pages/AddNotes'
import Login from './pages/Login'
import Signup from './pages/Signup'
import User from './pages/User'
import Task from './pages/Task'

function App() {
  const [userNotes,setUserNotes]=useState([])
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Dashboard/>}></Route>
      <Route  path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup />} ></Route>
      <Route  path='/Account' element= {<User userNotes={setUserNotes} setUserNotes={setUserNotes}/>}></Route>
      <Route path='/Task' element={<Task/>}></Route>
    </Routes>
    </>
  )
}

export default App
