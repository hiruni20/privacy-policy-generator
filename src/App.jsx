import React from 'react'
import Navbar from './components/Navbar/Navbar'
//import Numbering from './components/Numbering'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Step1 from './components/pages/Step1/Step1'
import Step2 from './components/pages/Step2/Step2'
import Step3 from './components/pages/Step3/Step3'



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
        <Route path='/step1' element={<Step1/>}/>
        <Route path='/step2' element={<Step2/>}/>
        <Route path='/step3' element={<Step3/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App


