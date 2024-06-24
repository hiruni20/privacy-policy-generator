import React, { useState } from 'react';
import './Step1.css';
import { BsWindow } from "react-icons/bs";
import { PiDevicesLight } from "react-icons/pi";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, useNavigate } from 'react-router-dom';

function Step1() {
    const [isWebsiteSelected, setIsWebsiteSelected] = useState(false);
    const [isAppSelected, setIsAppSelected] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleWebsiteClick = () => {
        setIsWebsiteSelected(prevState => !prevState);
    };

    const handleAppClick = () => {
        setIsAppSelected(prevState => !prevState);
    };

    const handleNextStep = () => {
        if (!isWebsiteSelected && !isAppSelected) {
            setError(true);
        } else {
            setError(false);
            navigate('/step2');
        }
    };

    return (
        <div className='maincontainer'>
            <div className='container'>
                <div className='formcon'>
                    <div className='titles'>
                        <h2>Privacy Policy Generator</h2>
                        <h3>Where will your Privacy Policy be used?</h3>
                        <h5>Click all that apply</h5>
                    </div>
                    <div className='select'>
                        <div 
                            className={`fweb ${isWebsiteSelected ? 'selected' : ''}`} 
                            onClick={handleWebsiteClick}
                        >
                            <div className='left'>
                                <div className='webimg'><BsWindow /></div>
                            </div>
                            <div className='right'>
                                <div className='text'>
                                    <h4>Website</h4>
                                    <h5>Privacy Policy for a Website</h5>
                                </div>
                            </div>
                        </div>
                        <div 
                            className={`fapp ${isAppSelected ? 'selected' : ''}`} 
                            onClick={handleAppClick}
                        >
                            <div className='left'>
                                <div className='appimg'><PiDevicesLight /></div>
                            </div>
                            <div className='right'>
                                <div className='text'>
                                    <h4>App</h4>
                                    <h5>Privacy Policy for an App</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red' }}>Please select at least one option</p>}
                    <div className='btn-btn'>
                        <button onClick={handleNextStep}>Next step
                            <div className='arrow'><HiArrowLongRight /></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step1;
