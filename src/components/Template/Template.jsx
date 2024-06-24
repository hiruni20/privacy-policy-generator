import React, { useContext } from 'react';
import './Template.css'
import FormContext from '../../FormContext'

function Template() {
  const { formData } = useContext(FormContext);
  
  const collectedInfo = [
    { key: 'email', label: 'Email address' },
    { key: 'name', label: 'First name and last name' },
    { key: 'phone', label: 'Phone number' },
    { key: 'useraddress', label: 'Address, State, Province, ZIP/Postal code, City' },
    { key: 'other', label: 'Other' }
  ];
  const additionalInfo = [
    { key: 'location', label: 'Information regarding your location' },
    { key: 'phonebook', label: "Information from your Device's phone book (contacts list)" },
    { key: 'camera', label: "Pictures and other information from your Device's camera and photo library" }
  ];

  const socialMediaPlatforms = ['Google', 'Facebook', 'Instagram', 'Twitter', 'LinkedIn'];
  return (
    <div className='maincontainer'>
      <div className='paperh'>
        <div className='header'>
          <h3>Privacy Policy for {formData.appName} </h3>
        </div>

        <div className='paper'>

          <div className='title'>
            <div className='subh'>
              <h1>Privacy Policy</h1>
            </div>
          </div>
          <div className='content'>
            <div className='cphara'>
              <p>Last updated: {formData.generatedDate}</p>
              <div className='list'>
                <ul>
                  {collectedInfo.map(info => formData[info.key] && <li key={info.key}>{info.label}</li>)}
                  {additionalInfo.map(info => formData[info.key] && <li key={info.key}>{info.label}</li>)}
                  <li>Usage Data</li>
                  <li><strong>Country</strong> refers to: {formData.country}</li>
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to {formData.company},{formData.address}.</li>
                  {formData.byemail && <li>By email: {formData.emailby}</li>}
                {formData.byphone && <li>By phone number: {formData.phoneNumber}</li>}
                {formData.web && <li>By visiting a page on our website: {formData.website}</li>}
                {formData.post && <li>By sending post mail: {formData.postAddress}</li>}
                </ul>
              </div>
              {formData.social && (
                <div className='list'>
                  <h3>Social Media Platforms</h3>
                  <ul>
                    {socialMediaPlatforms.map(platform => <li key={platform}>{platform}</li>)}
                  </ul>
                </div>
              )}
             </div> 
           </div>   
      </div>
      </div>
    </div>

  )
}

export default Template
