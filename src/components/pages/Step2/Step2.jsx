import React, { useContext, useMemo, useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import './Step2.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import FormContext from '../../../FormContext';

function Step2() {
    const { formData, updateFormData } = useContext(FormContext);
    const options = useMemo(() => countryList().getData(), []);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleCountryChange = (selectedOption) => {
        //add country label to form data
        updateFormData({ country: selectedOption.label });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
      };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.appName) newErrors.appName = 'App name is required';
        if (!formData.type) newErrors.type = 'Entity type is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (formData.type === "I'm a Business") {
            if (!formData.company) newErrors.company = 'Company name is required';
            if (!formData.address) newErrors.address = 'Address is required';
        }
        return newErrors;
    };

    const handleNextStep = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            setErrors({});
            navigate('/step3');
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='maincontainer'>
            <div className='container'>
                <div className='formcon'>
                    <div className='titles'>
                        <h2>Privacy Policy Generator</h2>
                    </div>
                    <div className='formc'>
                        <form>
                            <div className='formdata'>
                                <label htmlFor="appName" className='label' style={{ fontWeight: '600' }}>What is your app name?</label>
                                <input
                                    className='input-form'
                                    type="text"
                                    placeholder='My App'
                                    name="appName"
                                    value={formData.appName}
                                    onChange={handleChange}
                                />
                                {errors.appName && <p style={{ color: 'red' }}>{errors.appName}</p>}
                                <p>e.g My App</p>
                            </div>
                            <div className='formdata'>
                                <label htmlFor="type" style={{ fontWeight: '600' }}>Entity type</label><br />
                                <div className='radio-group'>
                                    <input
                                        type="radio"
                                        id="business"
                                        name="type"
                                        value="I'm a Business"
                                        onChange={handleChange}
                                        checked={formData.type === "I'm a Business"}
                                        className='radiob'
                                    />
                                    <label htmlFor="business" className='rt'>I'm a Business</label>
                                </div>
                                <div className='eg'>
                                    <p>e.g. Corporation, Limited Liability Company, Non-profit, Partnership, Sole Proprietor</p>
                                </div>
                                <div className='radio-group'>
                                    <input
                                        type="radio"
                                        id="individual"
                                        name="type"
                                        value="I'm an Individual"
                                        onChange={handleChange}
                                        checked={formData.type === "I'm an Individual"}
                                        className='radiob'
                                    />
                                    <label htmlFor="individual" className='rt'>I'm an Individual</label>
                                </div>
                                {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
                                {formData.type === "I'm a Business" && (
                                    <>
                                        <div className='data'>
                                            <label htmlFor='company'><div className='label text'>What is the name of the business?</div></label>
                                            <input
                                                className='input-data'
                                                type="text"
                                                placeholder='My Company LLC'
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                            {errors.company && <p style={{ color: 'red' }}>{errors.company}</p>}
                                            <p style={{marginLeft:'15px'}}>e.g My Company LLC</p>
                                        </div>
                                        <div className='data'>
                                            <label htmlFor='address' style={{background:'none'}}><div className='label text' >What is the address of the business?</div></label>
                                            <input
                                                className='input-data'
                                                type="text"
                                                placeholder='Cupertino, CA 95014'
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                            {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                                            <p style={{marginLeft:'15px'}}>e.g. 1 Cupertino, CA 95014</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className='formdata'>
                                <label htmlFor="country" className='label' style={{ fontWeight: '600', marginBottom: '15px' }}>Enter the country</label>
                                <Select
                                    options={options}
                                    value={formData.country}
                                    onChange={handleCountryChange}
                                    placeholder="Select Country"
                                />
                                {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
                            </div>
                            <div className='formdata'>
                                <label htmlFor="state" className='label' style={{ fontWeight: '600' }}>Enter State</label>
                                <input
                                    className='input-form'
                                    type="text"
                                    placeholder='State'
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                        <div className='btn-btn2'>
                            <Link to={'/step1'} className='nav'>
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
        </div>
    );
}

export default Step2;
