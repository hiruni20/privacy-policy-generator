import React, { useState }  from 'react'
import './Step1.css'
import images from '../../../constants/images';
//import Numbering from '../../Numbering'
import { BsWindow } from "react-icons/bs";
import { PiDevicesLight } from "react-icons/pi";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';


function Step1() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
    setIsClicked(prevState => !prevState);
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
                    <div className='fweb' >
                        <div className='left'>
                            <div className='webimg'>< BsWindow/></div>
                        </div>
                        <div className='right'>
                            <div className='text'>
                                <h4>Website</h4>
                                <h5>Privacy Policy for a Website</h5>
                            </div>
                        </div>
                    </div>
                    <div className='fapp'>
                        <div className='left'>
                            <div className='appimg'><PiDevicesLight /></div>
                        </div>
                        <div className='right'>
                            <div className='text'>
                                <h4>App</h4>
                                <h5>Privacy Policy for a App</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='btn-btn'>
                <Link to={'/step2'} className='nav' >
                    <button>Next step
                        <div className='arrow'><HiArrowLongRight /></div></button> </Link>
                </div>
            </div>
        </div>
    
      
    </div>
  )
}

export default Step1
