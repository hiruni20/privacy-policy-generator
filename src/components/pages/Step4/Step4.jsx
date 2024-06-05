import React, { useState } from 'react'
import './Step4.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Step4() {
    
  return (
    <div className='maincontainer'>
            <div className='formcon'>
                <div className='titles'>
                    <h2>Privacy Policy Generator</h2>
                </div>
                <div className='formc'>
                    <form>
                        <div className='formdata'>
                            
                            <label htmlFor="appName" className='label' style={{ fontWeight: '600' }}>What kind of personal information do you collect from users?</label>
                            <p>Click all that apply</p>
                            <FormGroup className='checkbox'>
                                <FormControlLabel control={<Checkbox checked={email} onChange={(e) => setEmail(e.target.checked)} />} label="By email" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={web} onChange={(e) => setWeb(e.target.checked)} />} label="By visiting a page on our website" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={phone} onChange={(e) => setPhone(e.target.checked)} />} label="By phone number" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={post} onChange={(e) => setPost(e.target.checked)} />} label="By sending post mail" style={{ color: '#303030' }} />
                            </FormGroup>
                            {error && <p style={{ color: 'red' }}>Please select at least one option</p>}
                        </div>
                        
                    </form>
                    <div className='btn-btn2'>
                    <Link to={'/step2'} className='nav' >
                        <button style={{ backgroundColor: '#fff', color: '#303030' }}>
                            <div className='arrow1'><BsArrowLeftShort /></div>Previous step
                        </button>
                        </Link>
                        
                        <button onClick={handleNextStep}>Next step
                            <div className='arrow'><BsArrowRightShort /></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Step4
