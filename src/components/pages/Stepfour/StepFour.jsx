import React, { useContext, useState } from 'react';
import './StepFour.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import FormContext from "../../../FormContext";

function StepFour() {
    const { formData, updateFormData } = useContext(FormContext);
    const [error, setError] = useState(false);
    const [validationError, setValidationError] = useState({
        emailby: '',
        phoneNumber: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        updateFormData({ [name]: type === 'checkbox' ? checked : value });
        setValidationError({ ...validationError, [name]: '' });  
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhoneNumber = (phone) => {
        const re = /^\+?[1-9]\d{1,14}$/;
        return re.test(String(phone));
    };

    const handleNextStep = () => {
        let isValid = true;
        const newValidationError = { emailby: '', phoneNumber: '' };

        if (formData.byemail && !validateEmail(formData.emailby)) {
            newValidationError.emailby = 'Please enter a valid email address.';
            isValid = false;
        }

        if (formData.byphone && !validatePhoneNumber(formData.phoneNumber)) {
            newValidationError.phoneNumber = 'Please enter a valid phone number.';
            isValid = false;
        }

        setValidationError(newValidationError);

        if (
            isValid &&
            (!formData.byemail || formData.emailby) &&
            (!formData.web || formData.website) &&
            (!formData.byphone || formData.phoneNumber) &&
            (!formData.post || formData.postAddress)
        ) {
            setError(false);
            navigate('/step5');
        } else {
            setError(true);
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
                            <label htmlFor="contactMethod" className='label' style={{ fontWeight: '600' }}>How do you collect personal information from users?</label>
                            <p>Click all that apply</p>
                            <FormGroup className='checkbox'>
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.byemail} onChange={handleChange} name="byemail" />} 
                                    label="By email" 
                                    style={{ color: '#303030' }} 
                                />
                                {formData.byemail && (
                                    <div className='data4'>
                                        <label htmlFor='emailby'><div className='label text'>What's the email?</div></label>
                                        <input
                                            className='input-data4'
                                            type="text"
                                            placeholder='office@mycompany.com'
                                            name="emailby"
                                            value={formData.emailby || ''}
                                            onChange={handleChange}
                                        />
                                        {validationError.emailby && <p style={{ color: 'red' }}>{validationError.emailby}</p>}
                                    </div>
                                )}
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.web} onChange={handleChange} name="web" />} 
                                    label="By visiting a page on our website" 
                                    style={{ color: '#303030' }} 
                                />
                                {formData.web && (
                                    <div className='data4'>
                                        <label htmlFor='website'><div className='label text'>What's the website URL?</div></label>
                                        <input
                                            className='input-data'
                                            type="text"
                                            placeholder='https://www.mywebsite.com'
                                            name="website"
                                            value={formData.website || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )}
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.byphone} onChange={handleChange} name="byphone" />} 
                                    label="By phone number" 
                                    style={{ color: '#303030' }} 
                                />
                                {formData.byphone && (
                                    <div className='data4'>
                                        <label htmlFor='phoneNumber'><div className='label text'>What's the phone number?</div></label>
                                        <input
                                            className='input-data4'
                                            type="text"
                                            placeholder='+1234567890'
                                            name="phoneNumber"
                                            value={formData.phoneNumber || ''}
                                            onChange={handleChange}
                                        />
                                        {validationError.phoneNumber && <p style={{ color: 'red' }}>{validationError.phoneNumber}</p>}
                                    </div>
                                )}
                                <FormControlLabel 
                                    control={<Checkbox checked={formData.post} onChange={handleChange} name="post" />} 
                                    label="By sending post mail" 
                                    style={{ color: '#303030' }} 
                                />
                                {formData.post && (
                                    <div className='data4'>
                                        <label htmlFor='postAddress'><div className='label text'>What's the post mail address?</div></label>
                                        <input
                                            className='input-data4'
                                            type="text"
                                            placeholder='123 Main St, Anytown, USA'
                                            name="postAddress"
                                            value={formData.postAddress || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )}
                            </FormGroup>
                            {error && <p style={{ color: 'red' }}>Please fill out the required fields for the selected options.</p>}
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

export default StepFour;
