import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Newcomponent from './Newcomponent'
import Todo from './component/Todo'


const App = () => {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todo/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/new' element={<Newcomponent/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App