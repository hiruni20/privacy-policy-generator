import React, { useContext, useState } from 'react';
import "./Step4.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import FormContext from '../../../FormContext.jsx';

function Step4() {
    const { formData, updateFormData } = useContext(FormContext);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, checked } = e.target;
        updateFormData({ [name]: checked });
    };

    const handleNextStep = () => {
        if (!formData.byemail && !formData.web && !formData.byphone && !formData.post) {
            setError(true);
        } else {
            setError(false);
            navigate('/step5');
        }
    };

    return (
        <div className='maincontainer4'>
            <div className='formcon4'>
                <div className='titles4'>
                    <h2>Privacy Policy Generator</h2>
                </div>
                <div className='formc4'>
                    <form>
                        <div className='formdata4'>
                            <label htmlFor="contactMethod" className='label' style={{ fontWeight: '600' }}>How do you collect personal information from users?</label>
                            <p>Click all that apply</p>
                            <FormGroup className='checkbox'>
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.byemail} onChange={handleChange} name="email" />} 
                                    label="By email" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.web} onChange={handleChange} name="web" />} 
                                    label="By visiting a page on our website" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.byphone} onChange={handleChange} name="phone" />} 
                                    label="By phone number" 
                                    style={{ color: '#303030' }} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.post} onChange={handleChange} name="post" />} 
                                    label="By sending post mail" 
                                    style={{ color: '#303030' }} 
                                />
                            </FormGroup>
                            {error && <p style={{ color: 'red' }}>Please select at least one option</p>}
                        </div>
                    </form>
                    <div className='btn-btn2'>
                        <Link to={'/step3'} className='nav'>
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

export default Step4;
