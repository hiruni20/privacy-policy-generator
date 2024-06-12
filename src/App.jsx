import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Step1 from './components/pages/Step1/Step1'
import Step2 from './components/pages/Step2/Step2'
import Step3 from './components/pages/Step3/Step3'
import StepFour from './components/pages/Stepfour/StepFour'
import Step5 from './components/pages/Step5/Step5'
import { FormProvider } from './FormContext'
import Template from './components/Template/Template'

function App() {
  return (
    <FormProvider>
      <Router>
        <MainContent />
      </Router>
    </FormProvider>
  )
}

function MainContent() {
  const location = useLocation()
  
  return (
    <>
      {location.pathname !== '/temp' && <Navbar />}
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path='/step1' element={<Step1 />} />
        <Route path='/step2' element={<Step2 />} />
        <Route path='/step3' element={<Step3 />} />
        <Route path='/step4' element={<StepFour />} />
        <Route path='/step5' element={<Step5 />} />
        <Route path='/temp' element={<Template />} />
      </Routes>
    </>
  )
}

export default App


