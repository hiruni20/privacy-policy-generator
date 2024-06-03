import React from 'react'
import Navbar from './components/Navbar/Navbar'
//import Numbering from './components/Numbering'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Step1 from './components/pages/Step1/Step1'



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
        <Route path='/' element={<Step1/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App


