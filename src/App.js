import React from 'react'
import {Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import TaskManage from './pages/TaskManage'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/task-manage' element={ <TaskManage/> } />
      </Routes>
    </div>
  )
}

export default App
