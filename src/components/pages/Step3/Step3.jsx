import React, { useState } from 'react'
import './Step3.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Step3() {
    const [email, setEmail] = useState(false);
    const [name, setName] = useState(false);
    const [phone, setPhone] = useState(false);
    const [address, setAddress] = useState(false);
    const [social, setSocial] = useState(false);
    const [other, setOther] = useState(false);
    const [location, setLocation] = useState(false);
    const [phonebook, setPhonebook] = useState(false);
    const [camera, setCamera] = useState(false);
    const [error, setError] = useState(false);

    const handleNextStep = () => {
        if (!email && !name && !phone && !address && !social && !other) {
            setError(true);
        } else {
            setError(false);
            
            console.log('Proceed to the next step');
        }
    };

    return (
        <div className='maincontainer'>
            <div className='formcon'>
                <div className='titles'>
                    <h2>Privacy Policy Generator</h2>
                </div>
                <div className='formc'>
                    <form>
                        <div className='formdata'>
                            <p>Skip selecting an option if none apply to you</p>
                            <label htmlFor="appName" className='label' style={{ fontWeight: '600' }}>What kind of personal information do you collect from users?</label>
                            <FormGroup className='checkbox'>
                                <FormControlLabel control={<Checkbox checked={email} onChange={(e) => setEmail(e.target.checked)} />} label="Email address" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={name} onChange={(e) => setName(e.target.checked)} />} label="First name and last name" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={phone} onChange={(e) => setPhone(e.target.checked)} />} label="Phone number" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={address} onChange={(e) => setAddress(e.target.checked)} />} label="Address, State, Province, ZIP/Postal code, City" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={social} onChange={(e) => setSocial(e.target.checked)} />} label="Social Media Profile information (ie. from Connect with Facebook, Sign In With Twitter)" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={other} onChange={(e) => setOther(e.target.checked)} />} label="Other" style={{ color: '#303030' }} />
                            </FormGroup>
                            {error && <p style={{ color: 'red' }}>Please select at least one option</p>}
                        </div>
                        <div className='formdata'>
                            <label htmlFor="appName" className='label' style={{ fontWeight: '600' }}>Select additional information you collect from a device (mobile/tablet)</label>
                            <p>Click all that apply</p>
                            <FormGroup className='checkbox'>
                                <FormControlLabel control={<Checkbox checked={location} onChange={(e) => setLocation(e.target.checked)} />} label="Location (GPS)" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={phonebook} onChange={(e) => setPhonebook(e.target.checked)} />} label="Phonebook (Contacts list)" style={{ color: '#303030' }} />
                                <FormControlLabel control={<Checkbox checked={camera} onChange={(e) => setCamera(e.target.checked)} />} label="Camera (Pictures)" style={{ color: '#303030' }} />
                            </FormGroup>
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

export default Step3
