import React, { useContext, useState } from 'react';
import './Step3.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import FormContext from '../../../FormContext';

function Step3() {
    const { formData, updateFormData } = useContext(FormContext);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, checked } = e.target;
        updateFormData({ [name]: checked });
    };

    const handleNextStep = () => {
        if (!formData.email && !formData.name && !formData.phone && !formData.useraddress && !formData.social && !formData.other) {
            setError(true);
        } else {
            setError(false);
            navigate('/step4');
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
                            <label htmlFor="appName" className='label' style={{ fontWeight: '600' }}>What kind of personal information do you collect from users?</label>
                            <p>Click all that apply</p>
                            <FormGroup className='checkbox'>
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.email} onChange={handleChange} name="email" />} 
                                    label="Email address" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.name} onChange={handleChange} name="name" />} 
                                    label="First name and last name" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.phone} onChange={handleChange} name="phone" />} 
                                    label="Phone number" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.useraddress} onChange={handleChange} name="address" />} 
                                    label="Address, State, Province, ZIP/Postal code, City" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.social} onChange={handleChange} name="social" />} 
                                    label="Social Media Profile information (ie. from Connect with Facebook, Sign In With Twitter)" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.other} onChange={handleChange} name="other" />} 
                                    label="Other" 
                                    style={{ color: '#303030' }} 
                                />
                            </FormGroup>
                            {error && <p style={{ color: 'red' }}>Please select at least one option</p>}
                        </div>
                        <div className='formdata'>
                            <label htmlFor="appName" className='label' style={{ fontWeight: '600' }}>Select additional information you collect from a device (mobile/tablet)</label>
                            <p>Skip selecting an option if none apply to you</p>
                            <FormGroup className='checkbox'>
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.location} onChange={handleChange} name="location" />} 
                                    label="Location (GPS)" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.phonebook} onChange={handleChange} name="phonebook" />} 
                                    label="Phonebook (Contacts list)" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.camera} onChange={handleChange} name="camera" />} 
                                    label="Camera (Pictures)" 
                                    style={{ color: '#303030' }} 
                                />
                            </FormGroup>
                        </div>
                    </form>
                    <div className='btn-btn2'>
                        <Link to={'/step2'} className='nav'>
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
    );
}

export default Step3;
