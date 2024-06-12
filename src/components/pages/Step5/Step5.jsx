import React, { useContext } from 'react';
import './Step5.css';
import { RiDownload2Fill } from "react-icons/ri";
import FormContext from '../../../FormContext';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Step5() {
  const { formData, updateFormData } = useContext(FormContext);

  return (
    <div className='maincontainer'>
      <div className='formcon'>
        <div className='titles'>
          <h2>Privacy Policy Generator</h2>
        </div>
        <div className='formc'>
          <form>
            <div className='formdata'>
              <label htmlFor="appName" className='label' style={{ fontWeight: '600' }}>Your e-mail address to receive the Privacy Policy</label>
              <p>You will receive the Privacy Policy to this email address</p>
              <input
                className='input-form'
                type="text"
                placeholder=''
                name="sendEmail"
                value={formData.sendEmail}
                onChange={(e) => updateFormData({ sendEmail: e.target.value })}
              />
            </div>
          </form>
          <div className='btn-btn2'>
            <Link to={'/step4'} className='nav'>
              <button style={{ backgroundColor: '#fff', color: '#303030' }}>
                <div className='arrow1'><BsArrowLeftShort /></div>Go Back
              </button>
            </Link>
            <button > 
              <div className='download'><RiDownload2Fill/>  </div>
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5;
