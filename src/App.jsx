import React from 'react'
import './App.css'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom'


import Intro from './components/Intro'
import Auth from './components/basicauth'
import Todo from './components/to_do_page'

function App(){
  return(
    <>
    <Router>
        <Routes>
          <Route index path='/' element={<Intro/>}/>
          <Route  path='/auth' element={<Auth/>}/>
          <Route  path='/todo' element={<Todo/>}/>
        </Routes>
      </Router>
    </>
  
  )
}

export default App
