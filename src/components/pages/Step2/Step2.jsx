import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import './Step2.css';

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

function Step2() {
    const [appName, setAppName] = useState('');
    const [type, setType] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const options = useMemo(() => countryList().getData(), []);
    const [state,setState] =useState("")

    const handleCountryChange = (selectedOption) => {
        setCountry(selectedOption);
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
                                    value={appName}
                                    onChange={(e) => setAppName(e.target.value)}
                                />
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
                                        onChange={e => setType(e.target.value)}
                                        checked={type === "I'm a Business"}
                                        className='radiob'
                                    />
                                    <label htmlFor="business" className='rt'>I'm a Business</label>
                                </div>
                                <div className='eg'>
                                    <p>e.g. Corporation, Limited Liability Company, Non-profit, Partnership, Sole Proprietor</p>
                                </div>
                                {type === "I'm a Business" && (
                                    <>
                                        <div className='data'>
                                            <label htmlFor='company'><div className='label text'>What is the name of the business?</div></label>
                                            <input
                                                className='input-data'
                                                type="text"
                                                placeholder='My Company LLC'
                                                name="company"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                            />
                                            <p>e.g My Company LLC</p>
                                        </div>
                                        <div className='data'>
                                            <label htmlFor='address'><div className='label text' >What is the address of the business?</div></label>
                                            <input
                                                className='input-data'
                                                type="text"
                                                placeholder='Cupertino, CA 95014'
                                                name="address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                            <p>e.g. 1 Cupertino, CA 95014</p>
                                        </div>
                                    </>
                                )}
                                <div className='radio-group'>
                                    <input
                                        type="radio"
                                        id="individual"
                                        name="type"
                                        value="I'm an Individual"
                                        onChange={e => setType(e.target.value)}
                                        checked={type === "I'm an Individual"}
                                        className='radiob'
                                    />
                                    <label htmlFor="individual" className='rt'>I'm an Individual</label>
                                </div>
                            </div>
                            <div className='formdata'>
                                <label htmlFor="country" className='label' style={{ fontWeight: '600', marginBottom:'15px' }}>Enter the country</label>
                                <Select
                                    options={options}
                                    value={country}
                                    onChange={handleCountryChange}
                                    placeholder="Select Country"
                                />
                            </div>
                            <div className='formdata'>
                                <label htmlFor="state" className='label' style={{ fontWeight: '600' }}>Enter State</label>
                                <input
                                    className='input-form'
                                    type="text"
                                    placeholder='State'
                                    name="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                        </form>
                        <div className='btn-btn2'>
                        <button style={{backgroundColor:'#fff',color:'#303030'}}>
                        <div className='arrow1'><BsArrowLeftShort /></div>Previous step
                               
                            </button>
                            <button>Next step
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
